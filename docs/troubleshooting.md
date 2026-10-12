# Troubleshooting and FAQ

Common problems and what to do about them, plus short answers to the questions people ask first.

The camera screen shows problems as dark banners near the top. The symbol tells you the kind: orange arrows when tracking is lost, a yellow tortoise for a hint, a red octagon for an error.

## Tracking is lost

A banner appears under the status pill. The phone lost track of where it is, usually after fast movement or in a scene with little to see, such as a blank wall.

- Walk back to where you were and hold the camera on something with detail. If the phone recognises the place, capture carries on in the same segment.
- To carry on from here instead, tap "Start new segment here". Capture continues in a new segment with fresh guidance.
- Or do nothing: the app starts a new segment by itself when the banner's countdown ends.

[Capturing a scene](capturing.md#when-tracking-is-lost) explains segments.

??? note "Details"
    - The banner reads "Relocalising — move back to where you were. Starting a new segment in N s." with a "Start new segment here" button, or "Tracking restarting — a new segment starts when tracking returns."
    - A second banner may read "Move the phone slowly around to start tracking."
    - The countdown is 15 seconds.

## The result looks warped

Walls bend because the camera positions have probably drifted (slid away from the truth) without the app noticing.

- Keep captures short, with plenty of detail in view (this generally drifts less).

## Keyframes are not being taken

The frame count in the status pill stays where it is while you walk. Frames are too blurry, or you are standing still.

- Walk and turn more slowly. When you move too fast for a sharp photo, a yellow tortoise pill "Slow down" replaces the guidance line, with a soft tap. It goes away once a sharp photo is taken. After a fast turn the app may take a slightly softer photo, so the photos stay connected.
- Add light.
- Check the hand button on the side rail. With manual capture on, the app takes keyframes only when you tap the shutter.

[Capturing a scene](capturing.md#walking-pace-and-distance) has the details.

??? note "Details"
    - The pill reads, for example, "Tracking · 12 frames".
    - A dim room makes blur worse, because the camera exposes longer.

## No guidance appears

- Wait a little. There is nothing to judge right after you tap Record.
- Check the side rail: a layer without a white disc behind its button is off.
- Turn the splat view off. The layers show only while it is off.
- For the grey hatching, turn "Use LiDAR" on and set Live splat to anything but "Off".

[Reading the guidance](guidance.md) describes each layer.

??? note "Details"
    The dots, the map and the ring appear a little after you tap Record. Next-view targets wait for 20 seconds after a segment starts.

## The guidance is slow and the phone is hot

The dots and targets lag behind what you have just captured, and the phone feels warm. With Live splat on "This iPhone", the phone trains the 3D model while it also tracks, films and draws the guidance.

- Let the phone cool down in the shade, out of its case, before you go on.
- Turn the dots off with the "Quality dots" button on the side rail. This saves drawing work.
- For the next capture, set Live splat to "Off" in Settings ([what that changes](#what-does-live-splat-off-do)).

??? note "Details"
    In general, an iPhone that gets hot slows itself down to cool off, so the guidance comes later.

## A red banner starts with "Live splat:"

The 3D model has a problem.

- If the banner stays, tap Stop to save your photos. The line above Done may then read "Saved · no splat".

## The camera stopped

A red banner starts with "Camera stopped:".

- Tap "Restart camera" in the banner.

## "Server and app versions do not match"

It shows in a red banner. You chose "Mac" under Live splat, and the Mac companion speaks a different version from the app. Until you update, the app cannot read the guidance from the Mac. Capture and export keep working.

- Update both the app and the Mac companion so they match.

??? note "Details"
    The message appears when the first guidance update from the Mac arrives in a format the app does not know. With "This iPhone" or "Off" you never see it.

## The export is missing or incomplete

A save fails after Stop, a red banner reports an export error, or photos you expect are missing from the capture's folder. The phone could not write the files; in general, the usual cause is a full phone.

- Free up space on the phone and capture again.
- Look in Files under On My iPhone, then "Capture Guide", not iCloud Drive.
- Always tap Stop before you leave the app. Wait until the button reads "Done" if you want the `splat.ply` too.
- Photos missing from `transforms.json` are still in `images/`. [Your captures and exporting](exporting.md#where-your-captures-are-stored) explains the folder layout.

??? note "Details"
    - After Stop, the line above Done may read "Save failed · waiting for the splat", "Save failed · no splat", "Splat saved · photos failed" or "Splat on the Mac · photos failed".
    - During the capture, a red banner may read "Cannot create export folder segment-N: …" or "Export flush failed: …".
    - Closing the app before you tap Stop can leave the newest photos out of `transforms.json`.
    - "Saved · no splat" on its own means the photos are saved but the 3D model could not be written. The capture is still complete for export.

## FAQ

### Which iPhones does it work on?

Capture Guide was tested on an iPhone 14 Pro. It needs iOS 18 or newer and a phone that supports ARKit, Apple's augmented reality framework.

### Do I need a LiDAR sensor?

No, the app captures without it. LiDAR adds a depth map to each keyframe and makes the grey hatching possible.

??? note "Details"
    On a phone without the sensor, "Use LiDAR" in Settings is greyed out.

### Do I need an internet connection or Wi-Fi?

No: with Live splat on "This iPhone" or "Off", the capture runs entirely on the phone. Only the "Mac" option and the place name use a network.

??? note "Details"
    - The "Mac" option looks for the Mac companion on your local network, which is why iOS asks for that permission. With "Mac" chosen, the keyframes go to that Mac over your network.
    - To name a capture after its place, the app asks Apple's map service for the place name, which sends the capture's coordinates to Apple.
    - Without a connection the capture is named by date and time, and it gets the place name the next time you open it online. Without location access it keeps the date and time.

### Where is my data stored?

On the phone, in the Capture Guide folder of the Files app. The app sends your photos nowhere by itself; what goes over a network is in the [answer above](#do-i-need-an-internet-connection-or-wi-fi).

### What does Live splat "Off" do?

The phone builds no 3D model and stays cooler, but it saves the same photos and still guides you with the dots, the map, the ring and the next-view targets. There is no grey hatching, and you export and train as usual.

??? note "Details"
    The capture's Splat tab says "Live splat was off".

### Is there a Mac app?

A Mac companion app is planned. Capture Guide does not need it.
