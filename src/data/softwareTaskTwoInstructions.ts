export const softwareTaskTwoInstructions = `
# Q1: Stark's Robot Telemetry

### Objective:

Build a ROS 2 system in which different nodes communicate using **multiple topics** to control and monitor a simulated robotic arm.

The system should demonstrate your understanding of **publishers, subscribers, messages, callbacks, and ROS 2 topics.**

### Core Setup:

- **ROS Version:** ROS 2 Humble or Jazzy
- **Programming Language:** Python
- **Recommended Libraries:** \`rclpy\` and standard ROS 2 message types
- **Simulation:** A simulated robotic arm / robot state provided as part of the task

### Robot Joint Ranges:

The robotic arm has three joints with the following operating ranges:

| Joint   | Range          |
| ------- | -------------- |
| Joint 1 | 0° to 180°     |
| Joint 2 | -180° to 180°  |
| Joint 3 | -5 cm to 20 cm |

**Note:** Joint 3 represents a linear/prismatic joint, while Joints 1 and 2 represent angular/revolute joints.

### Communication Tasks:

Your system should contain at least **two ROS 2 nodes**:

#### 1. Robot Controller

Create a node that publishes the desired position of the robot's joints.

For example:

\`\`\`text
/joint1_command
/joint2_command
/joint3_command
\`\`\`

The values published should represent the desired position of each joint.

#### 2. Robot Monitor

Create a separate node that subscribes to the robot's joint-state topics.

The monitor should:

- Receive the current joint positions.
- Display the received values.
- Determine whether each joint is operating within its permitted range.
- Clearly indicate when a joint exceeds its allowed limit.

For example:

\`\`\`text
Joint 1:  35°  → SAFE
Joint 2: -72°  → SAFE
Joint 3:  25 cm → LIMIT EXCEEDED
\`\`\`

#### 3. Robot Status

Create and publish a separate \` /robot_status\` topic containing the **overall state of the robot**.

The \`/robot_status\` message should contain the current values of all three joints along with the overall robot state, using a dictionary-style structure.

For example, if the input is:

\`\`\`
Joint 1 = 40°
Joint 2 = 225°
Joint 3 = 10 cm
\`\`\`

the robot status should be represented as:

\`\`\`
{
    "joint1": 40,
    "joint2": 225,
    "joint3": 10,
    "status": "LIMIT EXCEEDED"
}
\`\`\`

The status field should indicate whether **all joints are within their permitted ranges** or whether **one or more joints have exceeded their limits**.

The candidate should choose an appropriate ROS 2 message type and implement the \`/robot_status\` topic accordingly.

### ROS Requirements:

Your implementation should demonstrate:

- Creation of ROS 2 nodes.
- At least **two publishers and two subscribers**.
- Communication using **multiple ROS 2 topics**.
- Appropriate ROS 2 message types.
- Callback functions for processing incoming messages.
- Correct package structure and execution using ROS 2 commands.
- A separate \`/robot_status\` topic for the overall robot state.

You are encouraged to use \`ros2 topic list\`, \`ros2 topic echo\`, and other ROS 2 command-line tools to inspect and debug your system.

### Bonus Points:

Implement one or more of the following:

- Add a third node that acts as a centralized system monitor.
- Implement a safety node that detects an out-of-range joint and publishes a warning.
- Add timestamps to telemetry messages.
- Add a configurable update/publishing frequency.
- Display the robot telemetry in a simple custom GUI or visualization.

### Deliverables for Q1:

- ROS 2 package containing all required nodes.
- Source code with clear comments.
- Screenshots of the nodes running simultaneously, topics and messages using \`ros2 topic echo\` or similar commands.
- Screenshot of the ROS 2 RQT graph.
- Brief explanation of your ROS 2 architecture in the \`README.md\` of your repo.

---

# Q2: Stark's New Arm

### Objective:

The communication system is working.

Tony now wants to build the physical robot — but before a single piece of metal is manufactured, he wants a **digital prototype**.

You have been given the specifications of Stark's new robotic arm. Your task is to create its **URDF/Xacro description** and visualize the resulting robot in **RViz.**

### Robot Specifications:

The arm consists of a **base, two links, and an end-effector**.

| **Link** | **Shape** | **Dimensions** |
| ---- | ----- | ---------- |
| Base | Cuboid |L x B x H: 0.10 m x 0.10 m x 0.05 m |
| Link 1 (L1) | Cylinder | Radius: 0.025 m, Height: 0.075 m |
| Link 2 (L2) | Cylinder | Radius: 0.025 m, Height: 0.05 m |
| End-Effector | Cube |L x B x H: 0.075 m x 0.075 m x 0.075 m |

### Joint Specifications:

| Joint | Location | Type | Range | Axis |
| ----- | -------- | ---- | ----- | ---- |
| Joint 1 | Between Base and L1 | Revolute | -π/2 to π/2 | Z |
| Joint 2 | Between L1 and L2 | Revolute | -π/2 to π/2 | X or Y |
| Joint 3 | Between L2 and End-Effector | Revolute | -π/2 to π/2 | Z |

### Requirements:

Your robot description should:

- Contain all specified links and joints.
- Use the appropriate joint types and their specified limits.
- Define the correct parent-child relationships.
- Define appropriate joint axes and origins.
- Be written using **URDF or Xacro**.
- Use **different colors for each link**.
- Launch successfully in ROS 2.
- Be visualized correctly in **RViz**.

The final robot should form a continuous and logically connected kinematic chain.

### Bonus Points:

- Use Xacro macros to reduce repetition.
- Add collision geometry and inertial properties.
- Add a GUI or joint-state publisher to interactively move the robot.
- Create a launch file that starts the complete visualization setup automatically.

### Deliverables for Q2:

- URDF/Xacro files.
- ROS 2 launch file. (If Bonus part done)
- A screenshot showing the robot loaded and visualized in RViz.
- Brief explanation of your robot's structure and design choices. (If any modifications/additions were made)

### A note from Tony:

> *"**JARVIS, sometimes you gotta run before you can walk.**"*
`

// #### Base

// - **Shape:** Flat cuboid
// - **Length:** 0.10 m
// - **Breadth:** 0.10 m
// - **Height:** 0.05 m

// #### Link 1 (L1)

// - **Shape:** Cylinder
// - **Radius:** 0.025 m
// - **Height / Length:** 0.075 m

// #### Link 2 (L2)

// - **Shape:** Cylinder
// - **Radius:** 0.025 m
// - **Height / Length:** 0.05 m

// #### End-Effector

// - **Shape:** Cube
// - **Length:** 0.075 m
// - **Breadth:** 0.075 m
// - **Height:** 0.075 m

// #### Joint 1

// **Between Base and L1**

// - **Type:** Revolute
// - **Range:** -π/2 to π/2
// - **Axis:** Z

// #### Joint 2

// **Between L1 and L2**

// - **Type:** Revolute
// - **Range:** -π/2 to π/2
// - **Axis:** X or Y

// #### Joint 3

// **Between L2 and End-Effector**

// - **Type:** Revolute
// - **Range:** -π/2 to π/2
// - **Axis:** Z