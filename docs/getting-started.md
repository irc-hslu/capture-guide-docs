# Getting started

What you need and how to set up Capture Guide on your iPhone.

## Requirements

- An iPhone with iOS 18 or newer. Capture Guide was tested on an iPhone 14 Pro.
- A LiDAR sensor is optional. With LiDAR, the app saves a depth map (a distance for each pixel) with each photo it keeps and draws grey hatching over the surfaces it sees that the reconstruction does not cover yet. Without LiDAR the capture still works, but neither of those is available. A badge in the top bar shows one of three labels:
    - "LiDAR on": the sensor is in use.
    - "LiDAR off": the phone has the sensor, but you switched "Use LiDAR" off.
    - "LiDAR n/a": the phone has no LiDAR sensor.

## Install

!!! note "Coming soon"
    Capture Guide will be available through TestFlight or the App Store. The links will appear here.

When the app opens for the first time, iOS asks whether it may use the local network. The app uses it only to look for the optional Mac companion, and "Capture on this iPhone" does not depend on it. The camera prompt comes later, when you start your first capture.

## Your first capture

The phone runs the reconstruction itself, so you need no other device. Ignore the server section at the top of the start screen.

1. Open Capture Guide. The start screen is titled "Capture Guide".
2. Under "On this iPhone", the app tunes its engine for your phone. A row shows "Preparing engine…" and then "Engine ready". A capture started after that begins with the engine tuned, so give it a moment.
3. Below the "Capture on this iPhone" button, in its own section, leave "Use LiDAR" on if your phone has it. The switch is greyed out on phones without LiDAR.
4. Tap "Capture on this iPhone". The first time, iOS asks for camera access; capture needs it.
5. Walk slowly and keep the camera pointed at the scene. Each time the app takes a keyframe, the screen edge flashes white once and a thumbnail appears above the bottom buttons. The counter in the top bar ("12 kf", for keyframes: the photos the app keeps) goes up. [Capturing a scene](capturing.md) explains how to walk.
6. Watch the guidance and walk to the places it points out. [Reading the guidance](guidance.md) explains each element.
7. When "Room covered" appears, or when you have seen everything you want, tap "Finish". The button reads "Finishing…", then "Saved · training splat…" (the phone is still training the 3D model, which is made of many splats, tiny blobs of colour) and finally "Saved · splat on phone".
8. Tap "New capture" to return to the start screen, or leave the app. Your capture stays in the Capture Guide folder in the Files app. [Exporting](exporting.md) shows how to use it.

![Start screen with the On this iPhone section](img/getting-started-start-screen.png){ loading=lazy }
/// caption
Screenshot pending: the start screen with the "On this iPhone" section with "Engine ready" and the "Capture on this iPhone" button.
///

![Capture screen with the top bar, quality dots and bottom buttons](img/getting-started-capture-hud.png){ loading=lazy }
/// caption
Screenshot pending: the capture screen with the top bar (LiDAR badge and keyframe count), the overlay on the scene, the gear button and the Finish button at the bottom.
///

!!! info
    A Mac companion app is planned. Capture Guide does not need it.
