# Callouts demo

Temporary page for checking the callout component.

## Hand-placed, both sides

<figure class="callouts" markdown>
![Library screen](img/exporting-library.jpg)

1. **Title**: top of the screen.
   { data-x="50" data-y="8" data-side="l" }
2. **First row**: a capture entry.
   { data-x="30" data-y="30" data-side="l" }
3. **Second row**: another entry.
   { data-x="70" data-y="45" data-side="r" }
4. **Bottom**: the lower area.
   { data-x="50" data-y="85" data-side="r" }

</figure>

The paragraph after figure one must start below the last label.

## Seven labels on the right

<figure class="callouts" markdown>
![Library screen](img/exporting-library.jpg)

1. **One**: a label with a bit of text that wraps onto a second line when the column is narrow.
   { data-x="50" data-y="10" data-side="r" }
2. **Two**: close to the first.
   { data-x="50" data-y="12" data-side="r" }
3. **Three**: also close.
   { data-x="50" data-y="14" data-side="r" }
4. **Four**: middle.
   { data-x="50" data-y="40" data-side="r" }
5. **Five**: lower.
   { data-x="50" data-y="70" data-side="r" }
6. **Six**: near the end.
   { data-x="50" data-y="95" data-side="r" }
7. **Seven**: at the very bottom, with text.
   { data-x="50" data-y="98" data-side="r" }

</figure>

The paragraph after figure two must start below label seven.

## Anchor file, one name missing

<figure class="callouts" markdown>
![Library screen](img/callouts-demo.jpg)

1. **Top**: from the anchor file.
   { data-anchor="top" data-side="l" }
2. **Middle**: a point anchor.
   { data-anchor="middle" data-side="r" }
3. **Missing**: no such anchor, so the figure falls back to markers.
   { data-anchor="nope" data-side="r" }

</figure>

The paragraph after figure three.
