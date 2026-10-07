# Capturing a scene

How to record a scene with Capture Guide. The app is built for scenes: rooms and other spaces, indoors or outdoors. It has no mode for small objects.

## Overlap and viewpoint variety

A 3D reconstruction needs every part of the scene in several photos taken from different places. Two rules follow from that.

Move between shots. The app takes a keyframe (a photo it keeps for the reconstruction) when the view has changed enough against the last one. By default that means the new view shares about 60% or less with the last keyframe (the "Overlap floor" in the Settings sheet, which opens with the gear button at the bottom left of the capture screen), or you have turned the phone by about 10 degrees. Standing still adds nothing. A turn on the spot does add a frame every so often, which keeps the keyframes linked, but a step sideways gives the reconstruction the new angle it needs.

Do not retrace yourself. If you stand close to an earlier keyframe and look the same way, within about 10 degrees, the app skips the frame. "Close" scales with how far away the surfaces are: from 5 cm up to 30 cm. Come back to a spot from a different direction and it counts again.

## Walking pace and distance

Walk slowly and keep the phone steady. The app measures how much the image smears: the faster you turn the phone, the more blur, and a dim room makes it worse because the camera exposes longer. A frame blurrier than the blur limit (2 px by default) is skipped. The top bar flashes "blur" in red and shows the live value, and the keyframe counter stops rising. Slow down, and the counter picks up again.

![Red blur flash in the top bar after a fast pan](img/capturing-blur-flash.png){ loading=lazy }
/// caption
Screenshot pending: the red "blur" label and the "blur X px" line in the top bar while the phone moves too fast.
///

If you find the default blur limit too strict or too loose, the Settings sheet has a "Blur limit" stepper. It shows the live "blur X px" value, so you can see how fast you are moving.

The app does not enforce a distance to the surfaces. Check the guidance and the keyframe flashes to see whether the phone is picking up your view.

## Angles

Look at the same wall or piece of furniture from more than one side. A sideways step changes the view of nearby surfaces far more than a turn does, and that change in angle is one of the triggers for a new keyframe. For the floor and ceiling, tilt the phone down or up while you walk.

The guidance helps with this: it shows a yellow camera where to stand and the outlined area you should point at. [Reading the guidance](guidance.md) explains it.

## Light

Bright, even light gives sharp frames. In a dim room the camera exposes longer, so the same movement smears more and more frames are skipped for blur. Turn on the lights or move more slowly. In general, steady lighting through the whole capture gives a more even result than light that changes as you go.

## Reflective surfaces

In general, mirrors and glass reconstruct poorly, and so do other very shiny surfaces, because what they show changes with your viewpoint. Expect weak results there.

## Motion in the scene

A reconstruction assumes the scene stands still. In general, anything that moves while you capture, such as people or traffic, can show up as smears in the result. Wait for it to pass when you can.

## Keyframes by hand

If you want full control, turn on "Manual capture" in the Settings sheet or with the hand icon on the right edge. The automatic keyframes stop, and a round shutter button appears at the bottom. Tapping it takes a keyframe from the next sharp frame. If none arrives within about half a second, the button flashes red; hold the phone still and try again.

![Keyframe flash and thumbnails while walking](img/capturing-keyframe-pulse.png){ loading=lazy }
/// caption
Screenshot pending: a white border around the screen at the moment of a keyframe, and the strip of the last few keyframe thumbnails above the bottom buttons.
///

## When tracking is lost

The app only captures while the phone's tracking (Apple's ARKit) is working normally. If tracking drops, for example from fast motion or a scene with too little detail, capture pauses and the phone tries to find its place again.

- While it searches, an orange banner reads "Relocalising — move back to where you were. Starting a new segment in N s." Walk back to where you were. If the phone recognises the place, capture continues in the same segment.
- If it has not found the place after 15 seconds, or you tap "Start new segment here", capture continues in a new segment, shown as "seg 1", "seg 2" and so on in the top bar. While tracking restarts, a second banner reads "Tracking restarting — a new segment starts when tracking returns."

A segment is one continuous capture in one coordinate system. The phone starts a new one when it has lost the old coordinate system. Each segment is saved in its own folder, and the guidance starts over: the old reconstruction is no longer shown. You can tap "Start new segment here" during the countdown when you do not want to go back.

![Orange relocalising banner with the start new segment button](img/capturing-relocalising.png){ loading=lazy }
/// caption
Screenshot pending: the orange banner under the top bar with the countdown and the "Start new segment here" button.
///

## An indoor room

Walk the room and follow the guidance. The app shows a yellow camera where to stand next and an outlined area to point at. When it reports "Room covered", it has no further target.

With LiDAR, grey diagonal hatching appears on surfaces the phone sees that the reconstruction does not cover yet. It disappears once you have captured them. Without LiDAR there is no hatching, so rely on the coloured quality dots (they show how well each part of the scene is covered) and the minimap.

## An outdoor walk

Before you tap "Capture on this iPhone", switch on "Outdoor (sky background, 20 cm cells)" on the start screen. The engine then trains with a sky background and uses larger cells. The setting applies when the capture starts.

Beyond the range of LiDAR, the "Mono depth (points beyond LiDAR)" switch on the same screen, on by default, lets the phone estimate depth from the image alone. The switch also helps on phones without LiDAR.

Moving people and traffic add the problem described above.

## Keeping the screen on

While a capture runs, the phone does not dim or lock the screen. When you finish, the usual screen timeout applies again.
