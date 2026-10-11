// Leader-line callouts. Markup: <figure class="callouts"> holding one image and an <ol> whose <li> carry
// data-side="l|r" and either data-anchor="<name>" (looked up in the JSON file next to the image: same path, .json)
// or data-x/data-y (percent of the image). Wide figures get labels beside the image with SVG lines; narrow figures
// (or missing targets) get numbered markers on the image and the list below.
// Authoring syntax (attr_list): the attribute list goes on its own indented line after the item text, because
// attr_list does not apply a list at the end of the text line inside a list item:
//   1. [**Status pill**](#status-pill): tracking state.
//      { data-anchor="status-pill" data-side="l" }
// Wide mode needs a label column of at least MIN_LABEL_COL px on each side of the image; the image width adapts
// to the figure width (--shot-w).
(function () {
  "use strict";
  const MIN_LABEL_COL = 140;
  const NS = "http://www.w3.org/2000/svg";

  function clamp(lo, v, hi) { return Math.min(Math.max(v, lo), hi); }

  function anchorsUrl(img) {
    return (img.currentSrc || img.src).replace(/\.(png|jpe?g|webp)(\?.*)?$/i, ".json");
  }

  // The parsed anchor file, or null unless it has a positive image size and an anchors object.
  function validAnchors(a) {
    const ok = n => Number.isFinite(n) && n > 0;
    if (!a || !a.image || !ok(a.image.w) || !ok(a.image.h)) return null;
    return a.anchors && typeof a.anchors === "object" ? a : null;
  }

  async function loadAnchors(fig, img) {
    if (!fig.querySelector("li[data-anchor]")) return null;
    try {
      const r = await fetch(anchorsUrl(img));
      return r.ok ? validAnchors(await r.json()) : null;
    } catch (e) {
      return null;
    }
  }

  // Target rectangle in percent of the image, or null.
  function target(li, anchors) {
    const name = li.dataset.anchor;
    if (name) {
      const a = anchors && anchors.anchors && anchors.anchors[name];
      if (!a) return null;
      const W = anchors.image.w, H = anchors.image.h;
      return { x: 100 * a.x / W, y: 100 * a.y / H, w: 100 * a.w / W, h: 100 * a.h / H };
    }
    if (li.dataset.x === undefined || li.dataset.y === undefined) return null;
    return { x: parseFloat(li.dataset.x), y: parseFloat(li.dataset.y), w: 0, h: 0 };
  }

  // End point of the line: the edge facing the label, vertically centred; the centre with data-at="center".
  function endPoint(t, side, at) {
    const cy = t.y + t.h / 2;
    if (at === "center") return { x: t.x + t.w / 2, y: cy };
    return { x: side === "l" ? t.x : t.x + t.w, y: cy };
  }

  function setup(fig) {
    const img = fig.querySelector("img");
    const items = Array.from(fig.querySelectorAll("ol > li"));
    if (!img || !items.length) return;
    fig.classList.add("callouts--ready");
    items.forEach((li, i) => { li.dataset.n = String(i + 1); });
    const shot = document.createElement("div");
    shot.className = "callouts__shot";
    img.parentNode.insertBefore(shot, img);
    shot.appendChild(img);
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("callouts__lines");
    fig.appendChild(svg);
    const markers = items.map((li, i) => {
      const m = document.createElement("span");
      m.className = "callouts__marker";
      m.textContent = String(i + 1);
      m.setAttribute("aria-hidden", "true");
      m.dataset.n = String(i + 1);
      shot.appendChild(m);
      return m;
    });
    linkHighlight(fig);
    let anchors = null;
    const layout = () => draw(fig, img, shot, svg, items, markers, anchors);
    loadAnchors(fig, img).then(a => { anchors = a; layout(); });
    new ResizeObserver(layout).observe(fig);
    img.addEventListener("load", layout);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  }

  function draw(fig, img, shot, svg, items, markers, anchors) {
    svg.replaceChildren();
    items.forEach(li => { li.style.top = ""; });
    fig.style.minHeight = "";
    if (!img.complete || !img.naturalWidth) {
      fig.classList.remove("callouts--wide", "callouts--narrow");
      return;
    }
    const targets = items.map(li => target(li, anchors));
    const W = fig.clientWidth;
    const landscape = fig.classList.contains("callouts--landscape");
    const shotW = landscape ? clamp(320, W - 300, 520) : clamp(200, W - 360, 300);
    const gap = 2.2 * 0.72 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const wide = (W - shotW) / 2 - gap >= MIN_LABEL_COL && targets.every(Boolean);
    fig.style.setProperty("--shot-w", shotW + "px");
    fig.classList.toggle("callouts--wide", wide);
    fig.classList.toggle("callouts--narrow", !wide);
    if (!wide) {
      placeMarkers(items, markers, targets);
      return;
    }
    const box = fig.getBoundingClientRect();
    const r = img.getBoundingClientRect();
    const next = { l: -Infinity, r: -Infinity };
    let bottom = r.bottom - box.top;
    items.forEach((li, i) => {
      const side = li.dataset.side === "l" ? "l" : "r";
      const p = endPoint(targets[i], side, li.dataset.at);
      const px = r.left - box.left + r.width * p.x / 100;
      const py = r.top - box.top + r.height * p.y / 100;
      const h = li.offsetHeight;
      const top = Math.max(py - h / 2, next[side]);
      next[side] = top + h + 8;
      li.style.top = top + "px";
      bottom = Math.max(bottom, top + h);
      const lr = li.getBoundingClientRect();
      const lx = side === "l" ? lr.right - box.left + 6 : lr.left - box.left - 6;
      const ly = top + Math.min(h / 2, 12);
      const line = document.createElementNS(NS, "line");
      line.setAttribute("x1", lx); line.setAttribute("y1", ly);
      line.setAttribute("x2", px); line.setAttribute("y2", py);
      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", px); dot.setAttribute("cy", py); dot.setAttribute("r", 3.5);
      svg.append(line, dot);
    });
    fig.style.minHeight = Math.ceil(bottom + 8) + "px";
  }

  // Numbered markers beside their target, on the label's side, kept inside the image.
  function placeMarkers(items, markers, targets) {
    items.forEach((li, i) => {
      const m = markers[i], t = targets[i];
      m.hidden = !t;
      if (!t) return;
      const side = li.dataset.side === "l" ? "l" : "r";
      const x = side === "l" ? t.x - 4 : t.x + t.w + 4;
      m.style.left = Math.min(Math.max(x, 4), 96) + "%";
      m.style.top = Math.min(Math.max(t.y + t.h / 2, 3), 97) + "%";
    });
  }

  function linkHighlight(fig) {
    const set = (n, on) => fig.querySelectorAll(`[data-n="${n}"]`).forEach(e => e.classList.toggle("is-on", on));
    fig.querySelectorAll("[data-n]").forEach(e => {
      e.addEventListener("mouseenter", () => set(e.dataset.n, true));
      e.addEventListener("mouseleave", () => set(e.dataset.n, false));
    });
  }

  function init() { document.querySelectorAll("figure.callouts:not(.callouts--ready)").forEach(setup); }
  if (window.document$ && window.document$.subscribe) window.document$.subscribe(init);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
