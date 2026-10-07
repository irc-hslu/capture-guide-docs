# Reading the guidance

What the on-screen guidance tells you while you capture, and what to do about each part.

Most of it is drawn over the camera image and comes from the engine on your phone, which keeps training a rough reconstruction as you walk. The first dots and hatching therefore show up a little while after you start, once there is a first reconstruction to judge. Until then the line in the top bar reads "done – %". If you start with "Capture without server" instead, the app saves your keyframes but draws no quality dots, hatching or targets. The keyframe frustums still show.

The quality dots, the next-view targets and the keyframe frustums each have a button on the right edge of the screen (filled icon: on, outlined: off), and a switch in the Settings sheet. All three belong to the "Quality" view, described under [Splat preview](#splat-preview), and the buttons show only there.

## Quality dots

**What you see.** Small dots floating over the scene, one for each splat (a tiny blob of colour; the reconstruction is made of many of them) in the reconstruction so far. With the default colour scheme, "Blue-Orange", a light blue dot is well covered, the colour turns darker as coverage gets worse, and orange means the spot needs work. The minimap legend ([below](#minimap)) always shows the scheme you picked, from "good" to "needs work".

**What it means.** A spot gets full marks when the phone has seen it in about 8 photos, taken from a spread of directions, with at least one of them close enough to show it sharply. Fewer photos, or photos from one side only, leave the dot towards orange. The colours change as the phone takes new keyframes.

The "done" figure in the top bar counts the share of known spots that are nearly fully covered (more than 80%).

**What to do.** Walk towards the orange dots and look at them from a new side. Moving sideways helps more than turning on the spot, for the reasons given in [Capturing a scene](capturing.md#angles).

Turn the dots off with the "Quality dots" button or with "Show dots" in the Settings sheet; the engine keeps training either way. The "Colours" setting under "Quality view" switches the scheme.

![Quality dots over a room, orange where coverage is weak](img/guidance-quality-dots.png){ loading=lazy }
/// caption
Screenshot pending: a room in the camera view with quality dots, light blue on a well-covered wall and orange on a weakly covered corner, with the "done" figure visible in the top bar.
///

## Splat preview

**What you see.** The segmented control at the top of the screen reads "Quality" or "Splats", and a slider next to it sets the preview's opacity. Both appear only when you capture on this iPhone.

"Quality" is the default: the camera image with all the guidance layers on it. "Splats" hides the camera image and the other layers of the Quality view, and shows the reconstruction itself on black, so you can see what the phone has built so far. The minimap stays.

**What it means.** Gaps and thin areas in the "Splats" view are places the reconstruction has not learned yet. The slider sets how see-through the preview is, from nearly transparent to solid, and it fades the dots too.

**What to do.** Switch to "Splats" for a quick look, then switch back to "Quality" to carry on with the guidance. While "Splats" is showing, next-view targets are paused.

In the Settings sheet, "Preview style" chooses between "Dots" (the default) and "Colour". With "Colour" the preview shows the reconstruction's own colours instead of dots, and "Quality tint" can blend each splat towards its quality colour.

When you tap "Finish" the preview stops, and the camera image comes back with the guidance layers gone.

![Splats view of a half-built room on a black background](img/guidance-splat-preview.png){ loading=lazy }
/// caption
Screenshot pending: the "Splats" view of a partly reconstructed room on black, with the "Quality / Splats" control and the opacity slider visible at the top.
///

## Grey hatching

**What you see.** Grey diagonal stripes over a faint grey fill, lying on the surfaces the sensor has found.

**What it means.** The LiDAR sensor has found a surface here, but the reconstruction has nothing within about 10 cm of it yet. Hatching needs LiDAR; without it there is none. It also stays off until the first reconstruction exists, so you do not see it in the first moments of a capture.

**What to do.** Point the camera at the hatched surfaces. The stripes disappear as the reconstruction catches up.

![Grey hatching on a wall and the floor](img/guidance-hatch.png){ loading=lazy }
/// caption
Screenshot pending: grey diagonal hatching on part of a wall and floor, with the already reconstructed part of the same wall free of it.
///

## Keyframe frustums

**What you see.** A thin outline of a pyramid at every place where the app took a keyframe, pointing the way the camera looked. It is on by default.

**What it means.** The colour tells you how well that keyframe is tied to the others: it runs from "needs work" at 0% to "good" at 72%, the share of its view that another keyframe also sees. A white pyramid means the app cannot judge that keyframe yet. A new segment clears them, because the old coordinate system is gone.

**What to do.** Where pyramids sit at the "needs work" end, add views in between and around them, so each keyframe shares more of its view with its neighbours.

Switch them with the "Keyframe frustums" button or with "Show keyframe frustums" in the Settings sheet. Like the dots and the hatching, they show in the "Quality" view only.

![Keyframe pyramids along a walked path](img/guidance-frustums.png){ loading=lazy }
/// caption
Screenshot pending: pyramid outlines along a walked path, most of them blue and one or two orange where keyframes are far apart.
///

## Next-view target

**What you see.** A yellow camera shape in the room, with a ring on the floor under it, and an outlined box around the area to capture. When you are close to the yellow camera, a ring appears at the area itself. If the yellow camera is outside the screen, a white arrowhead near the screen edge points towards it.

A line in the top bar tells you what to do next. These are the lines, as they appear:

- "Stand at the yellow camera and point it at the outlined area": you are still far from it.
- "Point at the outlined area": you are at the yellow camera but not yet looking the right way.
- "Turn toward the outlined area": the same, with an arrow showing which way to turn.
- "Good — hold steady": you are in position, and the whole target turns green.
- "Captured": the target is done. It stays for a second.
- "Keep scanning — the next view appears shortly": weak areas remain, but there is no target to show right now.

"Room covered" appears in green in the top bar when no weak area is left.

**What it means.** The app picks one weak area at a time and shows you where to stand to fix it. You are in position when you are within about half a metre of the yellow camera and looking roughly at the area. With automatic keyframes on, the app then takes a keyframe by itself, you feel a tap, and you hear a click. If you use "Manual capture", tap the shutter button yourself.

A target ends in one of four ways:

- A keyframe is taken while you are in position. You hear a tone and feel a tap, "Captured" shows, and the next target follows.
- Other photos you take cover the area first.
- You do not approach for about 20 seconds. The app drops the target and may offer another.
- Another area becomes clearly more important.

No target shows during the first 20 seconds of a segment. Targets also need the "Next-view targets" switch (on by default) and a running capture. They show only in the "Quality" view.

**What to do.** Walk to the yellow camera and point the phone at the outlined area. When "Room covered" shows, you can finish, or carry on if you want a denser capture.

![Yellow camera, floor ring and outlined area in a room](img/guidance-next-view-target.png){ loading=lazy }
/// caption
Screenshot pending: a room with the yellow camera shape, the ring on the floor below it, the outlined box on a wall, and the instruction line "Stand at the yellow camera and point it at the outlined area" in the top bar.
///

## Guidance sounds and taps

Two short sounds go with the targets: a click when you reach the yellow camera, and a tone when its area is covered. The "Guidance sounds" switch in the Settings sheet turns them off. The phone's silent switch mutes them as well, and music or podcasts keep playing underneath. The taps you feel on arrival and on completion do not depend on that switch.

"Proximity ticks" are soft taps that come faster as you get nearer to the yellow camera, like a parking sensor, and stop once you are in position. Turn them off in the same section of the Settings sheet.

## Minimap

**What you see.** A round map at the bottom right, looking down from above. Your view direction always points up, and a white triangle in the middle is you. The map covers 5 metres around you. Each small square is a patch of known surface, coloured like the dots, with the legend "good" and "needs work" under it. A yellow dot marks the next-view target, with a short arrow towards the area to point at. If the yellow camera is more than 5 metres away, the dot sits on the rim.

**What it means.** It shows where around you coverage is still weak, including the spots behind you.

**What to do.** Use it to decide where to walk next, then use the target and the dots for the details. Tap the map to hide it; a "Map" button takes its place. Tap that to bring the map back.

![Minimap with a yellow target dot](img/guidance-minimap.png){ loading=lazy }
/// caption
Screenshot pending: the round minimap at the bottom right with blue and orange squares, the white triangle in the middle, the yellow target dot with its arrow, and the "good" and "needs work" legend.
///
