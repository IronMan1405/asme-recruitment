import MountBracket from '../assets/MountBracket.jpeg'
import PRATHAM from '../assets/Pratham_mech.png'

export const mechanicalTaskTwoInstructions = `
# Q1 - JAEGER ARM: CAN IT SURVIVE?

The breach has opened.

A Kaiju has emerged from the Pacific, and the PPDC has only one Jaeger close enough to intercept it. As the Jaeger charges into battle, the Kaiju lands a devastating blow directly against its arm.

The pilot manages to block the attack — but the impact sends enormous forces through the arm mounting bracket.

Back at the PPDC command centre, engineers pull up the bracket's design.

> _“If this bracket fails, the arm fails. If the arm fails, we lose the Jaeger.”_

The geometry is in your hands. The forces are known. Now prove whether it can survive.

The task is divided into 3 phases :- 

### Phase 1: Simulation of the Existing Bracket.

The bracket is subjected to a force of 100 kN radially on the cylindrical supports as highlighted and another axial force of 100 kN on the flat surface of the mounts. The screw holes on the base plate act as fixed supports. Simulate the model under the load and find the relevant values to judge the strength of the bracket.

![Mount Bracket](${MountBracket})

### Phase 2: Redesigning the Bracket

Use the results of the simulations to improve the bracket geometry by referring to the f3d file provided.

### Phase 3: Testing the new Bracket

Simulate the new design under the same conditions. Use these simulation results to justify the improvements you have made by providing a google doc with relevant screenshots of the past and new simulations and how they have improved the bracket design.

---

# Q2

The Pan Pacific Defense Corps is preparing a new generation of Jaegers. 
But building a machine capable of standing against a Kaiju is not simply a matter of making it bigger and stronger. 

Every component , from the massive structural frame to the smallest actuator mount, must be carefully designed, manufactured, and assembled. 

You have been recruited into the **Jaeger Engineering Division**. Your task is to demonstrate that you understand how the machines behind these giants are actually built. 

### Part A : Manufacturing & Material Selection

**Armor Plating & Structural Casing:** The Jaeger\’s forearm armor must absorb massive kinetic strikes from Kaiju while enduring prolonged exposure to corrosive saltwater environments. 

Which manufacturing process and material would you select for the forearm outer shell? Justify your choice. 

### Part B: Mechanical Subsystems & Design Selection 

**Actuation & Gearbox Selection:** The Jaeger\’s wrist-roll joint must deliver extreme torque to swing heavy melee weaponry while fitting inside a tight, compact joint enclosure. 

Crucially, during close-quarters combat, the transmission will be subjected to massive, unpredictable torsional shock loads when striking Kaiju armor. 

Research and evaluate different types of high-torque gearboxes (e.g., planetary, cycloidal, strain-wave/harmonic, worm, spur, etc.). 
Which specific gearbox type would you select for this heavy-duty joint actuation, and why? Justify your choice.

### Part C: Drive and Motors

**Motor & Gearbox Calculations:** To rotate the Jaeger\’s wrist joint and deploy its heavy melee blade during combat, a high-torque brushless DC motor drives the joint through a dedicated gear reduction transmission. The given requirements are:

- Required Output Torque at Wrist Joint: 1800 Nm
- Desired Wrist Rotation Speed: 15 RPM
- Gearbox Reduction Ratio: 50:1
- Gearbox Mechanical Efficiency: 85%

As  a part of the Jaeger Engineering Division, you must calculate the required torque (in Nm) and motor speed (in RPM) to achieve the target requirements. 

Also calculate the Power provided by the motor (in Watts).

---

# BROWNIE TASK — RoboWars Weapon Design Task

THIS TASK HAS BEEN MADE BY **Pratham Talaulikar** 
IN CASE OF ANY DOUBTS RELATED TO THIS QUESTION CONTACT HIM ON : **+91 80103 36476** 

![Pratham meme](${PRATHAM})

Design a **primary weapon** for a **15 kg combat robot specifically intended to fight a wedge-style opponent**. 
The weapon will be powered by a **BBOX Pluto H700 530 KV BLDC motor** with a **6S LiPo battery**.

You are free to choose the weapon concept (for example, drum, disc, bar, etc.), but the design must be practical, reliable, manufacturable, and suitable for repeated combat use. 
The weapon plus shaft should weigh **4kgs-5kg**. 
The weapon should be designed specifically with the objective of **effectively engaging and defeating a wedge opponent**.

### 1. CAD Model

Submit a complete 3D CAD model of your weapon assembly.

**CAD requirements:**

- Submit the native **Fusion 360 \`.f3d\` file**.
- The weapon design must be modelled using **steel as the CAD material.**
- Include the complete weapon assembly, including:
    - Weapon
    - Shaft
    - Bearings
    - Motor mounting
    - Fasteners
- **All bearings must be commercially available, off-the-shelf bearings. Custom bearings are not allowed.**

### 2. ANSYS Simulation

Perform an **ANSYS simulation of the weapon under an impact condition.**

The simulation should use the **approximated operating RPM calculated for the weapon** and should evaluate the weapon's response during impact.

At minimum, include:
- Mesh and mesh refinement where appropriate.
- Impact/loading conditions and justification.
- **Total deformation.**
- **Equivalent (von Mises) stress.**
- **Factor of safety**, where applicable.
- Identification of the areas experiencing the highest stress/deformation.
- Screenshots/results from ANSYS.

### 3. Final Design Summary

Finish the document with a summary table containing:
- Weapon type
- Weapon mass
- Operating RPM
- Maximum/target RPM
- Estimated stored energy
- Material of each major component
- Shaft diameter
- Bearing store link
- Key safety factor(s)
- ANSYS maximum stress
- ANSYS maximum deformation
- ANSYS factor of safety
- Any important design assumptions

### Important

The objective is **not simply to make the most powerful weapon possible**. The objective is to demonstrate your ability to take a real combat-robot engineering problem, develop a mechanically sound weapon for **fighting a wedge**, perform the necessary engineering calculations, create a complete CAD model, and validate the design using **ANSYS impact simulation**.

**All bearings must be off-the-shelf, commercially available components. Custom bearing designs are not permitted.**

All designs must comply with the RoboWars club's safety and competition rules and must be suitable for controlled testing.

_**Note:**_ The resources for the brownie task are available in the \`Optional Resources\` section. 

`
