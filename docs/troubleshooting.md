# Troubleshooting and FAQ

Common problems and what to do about them, plus short answers to the questions people ask first.

The camera screen shows problems as dark banners near the top. The symbol tells you the kind: orange arrows when tracking is lost, a yellow tortoise for a hint, a red octagon for an error.

## Tracking is lost

**What you see.** A banner with orange arrows under the status pill. It reads "Relocalising — move back to where you were. Starting a new segment in N s." with a "Start new segment here" button, or "Tracking restarting — a new segment starts when tracking returns." A second banner may read "Move the phone slowly around to start tracking."

**Cause.** The phone lost track of where it is. Fast movement and scenes with little to see, such as a blank wall, are the usual reasons.

**What to do.**

- Walk back to where you were and hold the camera on something with detail. If the phone recognises the place, capture carries on in the same segment.
- If you do not want to go back, tap "Start new segment here". Capture continues in a new segment with fresh guidance.
- Do nothing for 15 seconds and the app starts a new segment by itself.

[Capturing a scene](capturing.md#when-tracking-is-lost) explains segments in more detail. If the result looks slightly warped, with walls that bend, the camera positions have probably drifted (slid away from the truth) without the app noticing. In general, a shorter capture with plenty of detail in view drifts less.

## Keyframes are not being taken

**What you see.** The frame count in the status pill ("Tracking · 12 frames") stays where it is while you walk.

**Cause.** Frames are too blurry, or you are standing still. A dim room makes blur worse, because the camera exposes longer.

**What to do.** Walk and turn more slowly, and add light. If manual capture is on (the hand button on the side rail), the app takes keyframes only when you tap the shutter. [Capturing a scene](capturing.md#walking-pace-and-distance) has the details.

## No guidance appears

**Cause.** There are several possible reasons:

- Nothing to judge yet. The dots, the map and the ring appear a little after you tap Record, and next-view targets wait for 20 seconds after a segment starts.
- The layer is switched off on the side rail (no white disc behind its button), or the splat view is on. The layers show only while the splat view is off.
- Hatching also needs LiDAR ("Use LiDAR" on) and a Live splat setting other than "Off".

**What to do.** Check the buttons on the side rail and wait a little. [Reading the guidance](guidance.md) describes each layer.

## The guidance is slow and the phone is hot

**What you see.** The dots and targets lag behind what you have just captured, and the phone feels warm.

**Cause.** With Live splat on "This iPhone", the phone trains the 3D model while it also tracks, films and draws the guidance. In general, an iPhone that gets hot slows itself down to cool off, so the guidance comes later.

**What to do.**

- In general, letting the phone cool down in the shade, out of its case, before you go on helps.
- Turn the dots off with the "Quality dots" button on the side rail; this saves drawing work.
- For the next capture, set Live splat to "Off" in Settings. The phone then builds no 3D model; the dots, the map, the ring and the next-view targets still work.

If a red banner starting with "Live splat:" appears, the 3D model has a problem. If the banner stays, tap Stop to save your photos; the line above Done may then read "Saved · no splat".

## The camera stopped

**What you see.** A red banner starting with "Camera stopped:" and a "Restart camera" button.

**Cause.** The camera stopped during the capture.

**What to do.** Tap "Restart camera".

## "Server and app versions do not match"

**What you see.** This message in a red banner at the top.

**Cause.** You chose "Mac" under Live splat, and the Mac companion speaks a different version from the app. You see it when the first guidance update from the Mac arrives in a format the app does not know. With "This iPhone" or "Off" you never see it.

**What to do.** Update both the app and the Mac companion so they match. Until you do, the app cannot read the guidance from the Mac. Capture and export keep working.

## The export is missing or incomplete

**What you see.** One of these:

- After Stop, the line above Done reads "Save failed · waiting for the splat", "Save failed · no splat", "Splat saved · photos failed" or "Splat on the Mac · photos failed".
- A red banner reads "Cannot create export folder segment-N: …" or "Export flush failed: …" during the capture.
- The capture's folder in Files lacks photos you expect.

**Cause.** The phone could not write the files. In general, the usual cause is a full phone. Closing the app before you tap Stop can also leave the newest photos out of `transforms.json`.

**What to do.**

- Free up space on the phone and capture again.
- Look in Files under On My iPhone, then "Capture Guide", not iCloud Drive.
- Always tap Stop before you leave the app. Wait until the button reads "Done" if you want the `splat.ply` too.
- If `transforms.json` misses the newest photos, they are still in `images/`. [Your captures and exporting](exporting.md#where-your-captures-are-stored) explains the folder layout.

"Saved · no splat" on its own means the photos are saved but the 3D model could not be written. The capture is still complete for export.

## FAQ

### Which iPhones does it work on?

Capture Guide was tested on an iPhone 14 Pro. It needs iOS 18 or newer and a phone that supports ARKit, Apple's augmented reality framework. We list no other models.

### Do I need a LiDAR sensor?

No. The app captures without it. LiDAR adds a depth map to each keyframe and makes the grey hatching possible. On a phone without the sensor, "Use LiDAR" in Settings is greyed out.

### Do I need an internet connection or Wi-Fi?

No. With Live splat on "This iPhone" or "Off", the capture runs entirely on the phone. Two things use a network. The "Mac" option looks for the Mac companion on your local network, which is why iOS asks for that permission. And to name a capture after its place, the app asks Apple's map service for the place name, which sends the capture's coordinates to Apple. Without a connection the capture is named by date and time, and it gets the place name the next time you open it online. Without location access it keeps the date and time.

### Where is my data stored?

On the phone, in the Capture Guide folder of the Files app. The app sends your photos nowhere by itself. With Live splat on "Mac", the keyframes go to that Mac over your network. For the place name, the coordinates go to Apple (see above).

### What does Live splat "Off" do?

The phone builds no 3D model, which keeps it cooler. The capture saves the same photos, and the dots, the map, the ring and the next-view targets still guide you. There is no grey hatching, and the capture's Splat tab says "Live splat was off". You can export and train as usual.

### Is there a Mac app?

A Mac companion app is planned. Capture Guide does not need it.
