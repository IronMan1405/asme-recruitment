// export const softwareTaskOneInstructions = `
// # Q1: Gesture Recognition Engine

// ### Objective:

// Design and implement a software system that uses a **webcam feed** to recognize different hand gestures in real time.

// ### Core Setup:

// - **Programming Language:** Python
// - **Libraries:** OpenCV, MediaPipe
// - **Hardware:** Laptop webcam or USB camera
// - **Starting Point:** The basic MediaPipe hand-landmark code demonstrated during the ASME workshop

// ---

// ### Recognition Tasks:

// Your system should:

// - Detect and track a human hand in real time.
// - Use the detected **hand landmarks** to determine the performed gesture.
// - Recognize at least **4 distinct gestures**.
// - Handle situations where no hand is detected.

// You may choose the gestures yourself, but your system should contain a reasonable combination of static and/or dynamic gestures.

// Examples include:

// - Open Palm
// - Closed Fist
// - Thumbs Up
// - Victory ✌️
// - Swipe Left
// - Swipe Right

// ---

// ### Algorithm Design:

// Use the hand landmark information to design your own gesture classification logic.

// You may use:

// - Distances between landmarks
// - Angles between fingers/joints
// - Relative landmark positions
// - Motion vectors
// - Temporal information
// - A machine-learning-based classifier, if you wish

// Your implementation should be able to distinguish between gestures reliably rather than simply checking a single landmark condition.

// The system should display the **currently detected gesture** on the video feed.

// ### Optional example features:

// - Add a confidence score for detected gestures.
// - Support multiple hands.

// ---

// ### Brownie Points:

// Implement atleast one or two of the following to be considered for brownie points:

// - Implement dynamic gestures such as swipes.
// - Implement a gesture sequence/password system. (example: palm -> fist -> victory -> palm)
// - Add a confidence score for detected gestures.
// - Allow users to define or configure their own gestures.

// ---

// ### Deliverables for Q1:

// - Python source code with comments.
// - Short demo video showing the implemented gestures being recognized.

// ---

// # Q2: Virtual Mouse

// ### Objective:

// Tony is impressed with your gesture-recognition system.

// Now he wants to get rid of the mouse too.

// **Extend your gesture-recognition system into a Virtual Mouse that allows a user to control the computer pointer using only their hand.**

// ---

// ### System Setup:

// - **Language:** Python
// - **Libraries:** OpenCV, MediaPipe, PyAutoGUI (or an equivalent library)
// - **Hardware:** Laptop webcam

// ---

// ### Features to Implement:

// ### 1. Pointer Control

// Use the position of the **index-finger tip** to control the computer pointer.

// Your system should:

// - Map hand coordinates to screen coordinates.
// - Allow reasonably smooth pointer movement.
// - Reduce visible jitter using an appropriate smoothing technique.

// ---

// ### 2. Click & Drag

// Implement at least:

// - **Left Click** using a hand gesture.
// - **Right Click** using a different hand gesture.
// - **Drag** using a suitable gesture or gesture state.

// You are free to decide which gestures perform these actions.

// For example:

// \`\`\`text
// Open Palm → Move Pointer
// Pinch → Left Click
// Fist → Right Click
// Pinch + Move → Drag
// \`\`\`

// You do not have to use the example mapping above.

// ---

// ### 3. Usability

// The virtual mouse should:

// - Respond reasonably quickly to hand movements.
// - Avoid excessive pointer jitter.
// - Avoid accidental repeated clicks.
// - Continue functioning when the hand temporarily leaves the camera frame.

// ---

// ### Optional Features:

// - Scroll/Zoom using multi-finger gestures.
// - Gesture-based keyboard shortcuts. (example: victory "✌️" -> minimize window)
// - Adjustable pointer sensitivity (via a config file).
// - Support for multiple interaction modes.

// ---

// ### Deliverables:

// - Python source code with clear comments.
// - Demo video (~10–20 seconds) showing:
//   - Pointer movement
//   - Left click
//   - Right click
//   - Drag action

// ---

// ### A note from Tony:

// > *"If your computer can recognize your hand but still can't figure out what you're trying to do, congratulations — you've built a very expensive webcam."*`

export const softwareTaskOneInstructions = `
# Q1: Gesture Recognition Engine

### Objective:

Design and implement a software system that uses a **webcam feed** to recognize different hand gestures in real time.

### Recognition Tasks:

Your system should:

- Detect and track a human hand in real time.
- Use the detected **hand landmarks** to determine the performed gesture.
- Recognize at least **4 distinct gestures**.
- Handle situations where no hand is detected.

You may choose the gestures yourself, but your system should contain a reasonable combination of static and/or dynamic gestures.

Examples include:

- Open Palm
- Closed Fist
- Thumbs Up
- Victory ✌️
- Swipe Left
- Swipe Right

### Algorithm Design:

Use the hand landmark information to design your own gesture classification logic.

You may use:

- Distances between landmarks
- Angles between fingers/joints
- Relative landmark positions
- Motion vectors
- Temporal information
- A machine-learning-based classifier, if you wish

Your implementation should be able to distinguish between gestures reliably rather than simply checking a single landmark condition.

The system should display the **currently detected gesture** on the video feed.

### Optional example features:

- Add a confidence score for detected gestures.
- Support multiple hands.

### Brownie Points:

Implement atleast one or two of the following to be considered for brownie points:

- Implement dynamic gestures such as swipes.
- Implement a gesture sequence/password system. (example: palm -> fist -> victory -> palm)
- Add a confidence score for detected gestures.
- Allow users to define or configure their own gestures.

### Deliverables for Q1:

- Python source code with comments.
- Short demo video showing the implemented gestures being recognized.

---

# Q2: Virtual Mouse

### Objective:

Tony is impressed with your gesture-recognition system.

Now he wants to get rid of the mouse too.

**Extend your gesture-recognition system into a Virtual Mouse that allows a user to control the computer pointer using only their hand.**

### Features to Implement:

### 1. Pointer Control

Use the position of the **index-finger tip** to control the computer pointer.

Your system should:

- Map hand coordinates to screen coordinates.
- Allow reasonably smooth pointer movement.
- Reduce visible jitter using an appropriate smoothing technique.

### 2. Click & Drag

Implement at least:

- **Left Click** using a hand gesture.
- **Right Click** using a different hand gesture.
- **Drag** using a suitable gesture or gesture state.

You are free to decide which gestures perform these actions.

For example:

\`\`\`text
Open Palm → Move Pointer
Pinch → Left Click
Fist → Right Click
Pinch + Move → Drag
\`\`\`

You do not have to use the example mapping above.

### 3. Usability

The virtual mouse should:

- Respond reasonably quickly to hand movements.
- Avoid excessive pointer jitter.
- Avoid accidental repeated clicks.
- Continue functioning when the hand temporarily leaves the camera frame.

### Optional Features:

- Scroll/Zoom using multi-finger gestures.
- Gesture-based keyboard shortcuts. (example: victory "✌️" -> minimize window)
- Adjustable pointer sensitivity (via a config file).
- Support for multiple interaction modes.

### Deliverables:

- Python source code with clear comments.
- Demo video (~10–20 seconds) showing:
  - Pointer movement
  - Left click
  - Right click
  - Drag action

---

### A note from Tony:

> *"If your computer can recognize your hand but still can't figure out what you're trying to do, congratulations — you've built a very expensive webcam."*`