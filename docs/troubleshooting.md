# Troubleshooting and FAQ

Common problems and what to do about them, plus short answers to the questions people ask first.

## Tracking is lost

**What you see.** An orange banner under the top bar. It reads "Relocalising — move back to where you were. Starting a new segment in N s." with a "Start new segment here" button, or "Tracking restarting — a new segment starts when tracking returns."

**Cause.** The phone lost track of where it is. Fast movement and scenes with little to see, such as a blank wall, are the usual reasons.

**What to do.**

- Walk back to where you were and hold the camera on something with detail. If the phone recognises the place, capture carries on in the same segment.
- If you do not want to go back, tap "Start new segment here". Capture continues in a new segment with fresh guidance.
- Do nothing for 15 seconds and the app starts a new segment by itself.

[Capturing a scene](capturing.md#when-tracking-is-lost) explains segments in more detail. If the result looks slightly warped, with walls that bend, the camera positions have probably drifted (slid away from the truth) without the app noticing. In general, a shorter capture with plenty of detail in view drifts less.

## Keyframes are not being taken

**What you see.** The keyframe counter ("12 kf") stays where it is while you walk, and "blur" flashes red in the top bar.

**Cause.** Frames are blurrier than the blur limit, or you are standing still.

**What to do.** Walk and turn more slowly, add light, or raise "Blur limit" in the Settings sheet. [Capturing a scene](capturing.md#walking-pace-and-distance) has the details.

## No guidance appears

**Cause.** There are several possible reasons:

- You chose "Capture without server". That mode saves keyframes but draws no quality dots, hatching or targets. Only the keyframe frustums show.
- The first reconstruction does not exist yet. The line in the top bar reads "done – %" until it does, and next-view targets wait for 20 seconds after a segment starts.
- The layer is switched off, or the "Quality / Splats" control at the top is set to "Splats". The layers show only in the "Quality" view.
- Hatching also needs LiDAR. The badge in the top bar shows "LiDAR on" when it is in use.

**What to do.** Check the buttons on the right edge and the control at the top, and wait a little. [Reading the guidance](guidance.md) describes each layer.

## The guidance is slow and the phone is hot

**What you see.** The number next to "engine" in the top bar (for example "engine 8.4 s") keeps growing. It is the time since the last guidance update. The "it/s" figure drops, and a count such as "12 queued" grows. "queued" is the number of keyframes still waiting for the engine to take them in.

**Cause.** The phone is training the reconstruction while it also tracks, films and draws the preview. In general, an iPhone that gets hot slows itself down to cool off, so the guidance comes later.

**What to do.**

- In general, letting the phone cool down in the shade, out of its case, before you go on helps.
- Turn the dots off with the "Quality dots" button or "Show dots" in the Settings sheet. The preview stops, and the engine keeps training.
- Before the next capture, give the engine less work on the start screen, under "On this iPhone": a lower "Training cap", a smaller "Splat budget" or "Image size", a slower "Splat preview" or a lower "Preview resolution". They apply when you tap "Capture on this iPhone".

If the top bar reads "engine stopped", with "Preview paused" in orange, the engine has stopped and the guidance with it. Tap "Finish" to save your photos, then "New capture" to start again. The button may stay on "Saved · training splat…", because the engine can no longer finish the 3D model.

## "Server and app versions do not match"

**What you see.** This red message replaces the server status in the top bar.

**Cause.** If you connect to a Mac companion, this means the Mac companion speaks a different version from the app. You see it when the first guidance update from that server arrives in a format the app does not know. If you only use "Capture on this iPhone", you will never see it, because no server is involved.

**What to do.** Update both the app and the Mac companion so they match. Until you do, the app cannot read the guidance from the Mac companion. Capture and export keep working.

## The export is missing or incomplete

**What you see.** One of these:

- The "Finish" button reads "Save failed — see error" and a red line shows the reason, such as "Export flush failed: …".
- It reads "Splat on phone · local save failed".
- A red line reads "Cannot create export folder segment-N: …" during the capture.
- The Capture Guide folder in Files lacks photos you expect.

**Cause.** The phone could not write the files. In general, the usual cause is a full phone. Closing the app before "Finish" can also leave the newest photos out of `transforms.json`.

**What to do.**

- Free up space on the phone and capture again.
- Look in Files under On My iPhone, then "Capture Guide", not iCloud Drive.
- Always tap "Finish" before you leave. Wait until the button reads "Saved · splat on phone" if you want the `splat.ply` too.
- If `transforms.json` misses the newest photos, they are still in `images/`. [Exporting](exporting.md#where-your-captures-are-stored) explains the folder layout.

## FAQ

### Which iPhones does it work on?

Capture Guide was tested on an iPhone 14 Pro. It needs iOS 18 or newer and a phone that supports ARKit, Apple's augmented reality framework. We list no other models.

### Do I need a LiDAR sensor?

No. The app captures without it. LiDAR adds a depth map to each keyframe and makes the grey hatching possible. A badge in the top bar shows "LiDAR on", "LiDAR off" or "LiDAR n/a".

### Do I need an internet connection or Wi-Fi?

Not for "Capture on this iPhone". The engine runs on the phone, and the app has no part that goes online. Wi-Fi is used only to look for and talk to the Mac companion. That is why iOS asks for permission to use the local network when the app opens.

### Where is my data stored?

On the phone, in the Capture Guide folder of the Files app. The app sends nothing anywhere by itself. Only when you connect it to a Mac companion do the keyframes go to that Mac, over your network.

### What does "Capture without server" do?

It saves the keyframes into the same folder but runs no engine, so there are no quality dots, hatching or targets. Keyframe frustums still show. You can export and train as usual.

### Is there a Mac app?

A Mac companion app is planned. Capture Guide does not need it.
