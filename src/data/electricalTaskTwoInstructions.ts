export const electricalTaskTwoInstructions = `
# Design Peter Parker’s Custom Wrist-Mounted Web-Shooter PCB

### Story

You are **Peter Parker (The Amazing Spider-Man)**, defending New York City. During your recent battle with the Green Goblin, your prototype web-shooter failed because loose wires and breadboards disconnected mid-swing. 

High-speed acrobatics, sudden movements, and extreme conditions require a reliable, compact custom PCB that can fit under your suit sleeve. You must design a custom Printed Circuit Board (PCB) using KiCad to power and control your web-shooting mechanism.

### Hardware Requirements & System Architecture

**1. Processing Unit (Microcontroller)**

    Integrate a microcontroller (eg, ESP32, Arduino Nano, Raspberry Pi Pico, etc.) 
    to handle trigger inputs and control outputs.

**2. Web Discharge Actuator (Motor Driver)**

    Include a motor driver module/circuit to control the motor or solenoid that 
    makes the web shoot.

**3. Primary Trigger & Auxiliary Control**

    Main Trigger: Include a primary push button to trigger shooting.

    Auxiliary Controls (Optional): It is up to you if you want to add 
    multiple buttons for additional features or firing modes.

**4. Sensor Integration**

    You are free to choose any sensor of your choice that might be useful for 
    the web-shooter. Some examples include:

    6-DOF IMU (e.g., MPU6050): To detect rapid wrist motion or arm orientation.
    
    Pressure Sensor (e.g., BMP280): To monitor remaining pressure 
    inside the web-fluid canister.

**5. Power Subsystem**

    Include a battery / LiPo cell connection on the PCB to power the system up.

**6. USB-C Interface**

    Include a USB-C port on the PCB.

### Platform

**KiCad**

### Note

**You can use as much AI you want.**

Keep in mind the **size constraints** of the PCB, as it needs to fit under your suit sleeve. The design should be compact, efficient, and reliable.

### Deliverables (KiCad)

Schematic Capture (.kicad_sch): Complete circuit diagram with properly labeled netnames, power flags, and decoupling components.

PCB Layout (.kicad_pcb): Clean routing, 2-layer design with proper trace widths for power and mounting holes for wrist mounting.

### BONUS TASK

--> Bare-Metal Microcontroller Implementation :

Instead of exporting a ready-made microcontroller module (like an Arduino Nano or ESP32 DevKit), try making your own microcontroller directly on the board using standalone chips—for example, using ATmega series chips (like the ATmega328P) along with its necessary supporting components (crystal oscillator, load capacitors, reset circuit, ICSP header, etc.).

`;