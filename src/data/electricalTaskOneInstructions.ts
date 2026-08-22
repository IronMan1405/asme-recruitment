export const electricalTaskOneInstructions = `
# Q1: Joker's Chaos Dial — Multi-Mode LED Traps

### Story

Joker has built a trap console in his hideout. Batman, investigating the lair, discovers the device and wants to understand how it works.

To analyze Joker's technology, Batman recreates the system using Arduino. By programming the dial to select different LED patterns, Batman can simulate Joker's trap and prepare counter-measures.

### Goal

Use a potentiometer to select between four LED modes:

- **Mode 0 — Chaos:** Random LED blinks with random delays.
- **Mode 1 — Order:** LEDs blink sequentially (1 → 2 → 3).
- **Mode 2 — Knight Rider:** LEDs sweep forward and back.
- **Mode 3 — All Blink:** All LEDs flash together.

### Platform

**Tinkercad**

### Note

You need to use at least **3 LEDs**.

# Q2: Batmobile Smart Cooling System — DC Motor with Temperature + Light Sensors

### Story

Batman’s Batmobile cooling system must be adaptive and intelligent.

The fan (DC motor), powered by a 9V battery through a motor driver, should react to both engine temperature and ambient light.

In daylight, the system runs in normal mode. In darkness, it switches to stealth mode, reducing fan speed to minimize noise.

If the engine overheats, the fan overrides all other conditions and runs at maximum speed to protect the engine.

### Goal

Develop an Arduino-based system that integrates a DC motor with temperature and light sensors, ensuring the Batmobile’s cooling fans operate differently under normal, stealth, and overheat conditions.

### Platform

**Tinkercad**

### Bonus Task

Allow manual mode switching via the Serial Monitor.
`;