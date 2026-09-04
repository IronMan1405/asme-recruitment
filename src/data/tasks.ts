import type { Task } from './types'
import { softwareTaskOneInstructions } from './softwareTaskOneInstructions'
import { electricalTaskOneInstructions } from './electricalTaskOneInstructions'
import { mechanicalTaskOneInstructions } from './mechanicalTaskOneInstruction'
// import { taskTwoInstructions } from './taskTwoInstructions'
import { electricalTaskTwoInstructions } from './electricalTaskTwoInstructions'
import { softwareTaskTwoInstructions } from './softwareTaskTwoInstructions'
import { mechanicalTaskTwoInstructions } from './mechanicalTaskTwoInstructions'

export const tasks: Task[] = [
  { id: 'mech-01', verticalId: 'mechanical', 
    title: 'Spider-Man\'s Multi-Purpose Toolkit', 
    shortDescription: 'Design a two-axis camera gimbal and a compact screwdriver assembly in Fusion 360 from the supplied requirements and drawings.', 
    difficulty: 'beginner', 
    estimatedTime: '2-3 hrs', 
    deadline: '2 September 2026, Wednesday EOD',
    prerequisites: ['No experience needed'], 
    instructions: mechanicalTaskOneInstructions, 
    resources: { required: [
        { type: 'tutorial', title: 'Learn Autodesk Fusion 360 in 30 Days for Complete Beginners!', url: 'https://youtube.com/playlist?list=PLrZ2zKOtC_-C4rWfapgngoe9o2-ng8ZBr&si=G5858X2RlZSmw4xD', note: 'Use this playlist to learn Fusion 360 basics.' },
        { type: 'video', title: 'Autodesk Fusion 360 Workshop 2', url: 'https://drive.google.com/file/d/1NGI40qE1Z_tl5eTfGca2ODm4ygynG66O/view', note: 'Part-2 of the Fusion 360 workshop conducted previously by ASME.' }
    ], optional: [] }, 
    evaluationCriteria: ['Q1: Functional working of the joints in the gimbal', 'Q2: Accuracy of Dimensions of the screwdriver', 'Q3 (Brownie Task): Complexity of the sketch and how well constrained it is'], 
    contactdetails: ['For any queries regarding the task, please reach out to ', 'Shreyas (+91 9004795249)',' Samanyu (+91 9897328395)'],
    submissionUrl: 'https://example.com/asme-demo/submit/mech-01', 
    tags: ['CAD', 'Fusion 360'] },

  { id: 'elec-01', verticalId: 'electrical', 
    title: 'Batman\'s Countermeasures Await!', 
    shortDescription: 'Build an Arduino and Tinkercad countermeasure console with selectable LED patterns, sensor input, and adaptive DC motor control.', 
    difficulty: 'beginner', 
    estimatedTime: '2-3 hrs', 
    deadline: '2 September 2026, Wednesday EOD',
    prerequisites: ['Basic circuit theory', 'Tinkercad', 'Arduino'], 
    instructions: electricalTaskOneInstructions, 
    resources: { required: [
        { type: 'video', title: 'Arduino Basics 101: Hardware Overview, Fundamental Code Commands', url: 'https://www.youtube.com/watch?v=BtLwoNJ6klE', note: 'Revision of workshop theory, although its much less detailed, great explanation nonetheless' },
        { type: 'video', title: 'How to use Potentiometer with Arduino | analogRead | Arduino Tutorial 5', url: 'https://www.youtube.com/watch?v=lg-QUBLm9eU', note: 'Use of potentiometer with arduino' },
        { type: 'video', title: 'How To Control a DC Motor with an Arduino(Simulation using tinkercad)', url: 'https://www.youtube.com/watch?v=4qpFQPPJ21U', note: 'Use this video to learn how to control a DC motor with an Arduino' },
        { type: 'video', title: 'LDR Sensor & Arduino Using Tinkercad', url: 'https://youtu.be/L-BWfZEaeps?si=ggugLzamOPKP2S9x', note: 'Use this video to learn how to use an LDR with an Arduino' },
        { type: 'video', title: 'How to use tmp36 with arduino | temperature based speed control', url: 'https://youtu.be/xo4oLCyfUtY?si=UDhyAWTIbXxJCivi', note: 'Use this video to learn how to use a TMP36 with an Arduino' },
    ], optional: [] }, 
    evaluationCriteria: ['Completed projects', 'You get what you f**** deserve! (Joker, 2019)'], 
    contactdetails: ['For any queries regarding the task, please reach out to ','Viinaayak (+91 8178547016) ',' Pranay (+91 7428630687)'],
    submissionUrl: 'https://example.com/asme-demo/submit/elec-01', 
    tags: ['Circuits', 'Tinkercad', 'Arduino'] },

  { id: 'soft-01', 
    verticalId: 'software', 
    title: 'Stark\'s Workstation', 
    shortDescription: 'Build a computer-vision-based human-computer interaction system that understands hand gestures and controls a computer.', 
    difficulty: 'moderate', 
    estimatedTime: '4-6 hrs', 
    deadline: '2 September 2026, Wednesday EOD',
    prerequisites: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI (or an equivalent library)', 'Laptop webcam'], 
    instructions: softwareTaskOneInstructions, 
    resources: { required: [
        { type: 'video', title: 'OpenCV Course - Full Tutorial with Python', url: 'https://youtu.be/oXlwWbU8l2o?si=GLw9_Nfn8n7mltMf', note: 'Use this course for the computer-vision and OpenCV foundations needed for the task.' }, 
        { type: 'video', title: 'Advanced Computer Vision with Python - Full Course', url: 'https://youtu.be/01sAkU_NvOY?si=pa28Wl_s6vp-ZHMj', note: 'Refer to this course for advanced hand-tracking and vision techniques.' }, 
        { type: 'tutorial', title: 'Getting started - Python Programming MOOC 2023', url: 'https://programming-23.mooc.fi/part-1/1-getting-started', note: 'Use this tutorial to refresh Python fundamentals before building the system.',}, 
        {type: 'other', title: 'Code demonstrated in the workshop', url: 'https://gists.github.com/vatsalbansal123/', note: 'Use this code to understand the basics of OpenCV and MediaPipe.'}
    ], optional: [] }, 
    evaluationCriteria: ['Functionality: 50%', 'Robustness & Usability: 20%', 'Code Quality: 20%', 'Innovation: 10%'], 
    contactdetails: ['For any queries regarding the task, please reach out to ','Dakshesh (+91 9703537152)',' Vatsal (+91 7011367535)'],
    submissionUrl: 'https://example.com/asme-demo/submit/soft-01', 
    tags: ['Python', 'computer vision', 'MediaPipe', 'OpenCV', 'robotics'] },

  { id: 'mech-02', 
    taskNumber: 2, 
    verticalId: 'mechanical',
    title: 'Mechanical Task 2', 
    shortDescription: 'Task 2 details will be published here.',
    difficulty: 'moderate', 
    estimatedTime: '5-6 hrs', 
    deadline: '14 September 2026, Monday EOD',
    prerequisites: [], 
    instructions: mechanicalTaskTwoInstructions,
    resources: { 
      required: [
        {type: 'other', title: 'Mount Bracket', url: 'https://drive.google.com/file/d/1tlo9G8L0JtkWPC5Sterz71io_5yCu9lx/view?usp=sharing', note: 'This is the mount bracket for the Jaeger arm.'}
      ], 
      optional: [
        {type: 'article', title: 'RoboWars Rulebook', url: 'https://drive.google.com/file/d/1zGZimogreQ1iMCUmE95Xwp42D65HULLK/view?usp=sharing', note: 'This is the official rulebook for RoboWars 2026. It contains all the rules and regulations for the competition.'},
        {type: 'tutorial', title: 'Riobotz Combot Tutorial', url: 'https://drive.google.com/file/d/1-jacyTHhxCLNsRD8R4MKvlurAGUvzAE1/view?usp=sharing', note: 'This is a tutorial for building a combat robot. It contains instructions and tips for building a combat robot.'},
        {type: 'datasheet', title: 'BBOX Pluto H700 530 KV BLDC motor', url: 'https://www.technobotix.in/products/bbox-pluto-h700-530kv-bldc-motor/1781252000001751669?srsltid=AfmBOoqX8kOkujRFMeI10APtaXrg8GSsw0cgRP-WLv-0NUSB8BoKgBor', note: 'This contains the specifications and datasheet for the BBOX Pluto H700 530 KV BLDC motor.'},
      ] 
    }, 
    evaluationCriteria: [], 
    contactdetails: ['For any queries regarding the task, please reach out to ', 'Shreyas (+91 9004795249)',' Samanyu (+91 9897328395)'],
    submissionUrl: 'https://example.com/asme-demo/submit/mech-02', 
    tags: [] },
  
  { id: 'elec-02', 
    taskNumber: 2, 
    verticalId: 'electrical',
    title: 'Go, Web, Go!', 
    shortDescription: 'Design a custom PCB for a wrist-mounted web-shooter on KiCad.',
    difficulty: 'intermediate', 
    estimatedTime: '5-6 hrs', 
    deadline: '14 September 2026, Monday EOD',
    prerequisites: ['PCB Design', 'KiCad'], 
    instructions: electricalTaskTwoInstructions,
    resources: { 
      required: [
        { type: 'video', title: 'How to Install KiCad on Windows | Open-Source PCB Design Tool', url: 'https://www.youtube.com/watch?v=lp101PM0emA', note: 'Use this video to install KiCad on Windows' },
        { type: 'video', title: 'KiCad', url: 'https://www.youtube.com/playlist?list=PLn6004q9oeqGl91KifK6xHGuqvXGb374G', note: 'Introductory playlist to learning KiCad' },
        { type: 'video', title: 'KiCad Tutorial - How to Import Footprints and Symbols from SnapEDA', url: 'https://www.youtube.com/watch?v=W9cLnIjvybo', note: 'Learn to Import Footprints and Symbols into KiCad' },
      ], 
      optional: [
        {type: 'video', title: 'Arduino UNO with KiCAD', url: 'https://www.youtube.com/playlist?list=PLTtLfASmybTHFta4OucFdbeCHaEbMNRCc', note: 'This playlist explores the designing of a microcontroller in KiCad' },
      ] }, 
    evaluationCriteria: ['Implementation Quality', 'Practicality of the design', 'Creativity and Innovation'],
    contactdetails: ['For any queries regarding the task, please reach out to ','Viinaayak (+91 8178547016) ',' Pranay (+91 7428630687)'],
    submissionUrl: 'https://example.com/asme-demo/submit/elec-02', tags: [] },
  
  { id: 'soft-02', 
    taskNumber: 2, 
    verticalId: 'software',
    title: 'Stark\'s Assembly Bay', 
    shortDescription: 'Build a ROS 2-based system that communicates, monitors, and visualizes a simulated robotic arm.',
    difficulty: 'moderate', 
    estimatedTime: '4-6 hrs', 
    deadline: '14 September 2026, Monday EOD',
    prerequisites: ['Python', 'ROS 2 Humble or Jazzy'], 
    instructions: softwareTaskTwoInstructions,
    resources: { 
      required: [
        {type: 'other', title: 'ROS 2 Humble Installation Guide', url: 'https://docs.google.com/document/d/1FeojTdEQ4H6Vw6RlK9X6XzIVTJVW7FDNf_uJi1hTJPI/edit?usp=sharing', note: 'This document contains all the resources required to install ROS 2 Humble on your system.'},
        {type: 'video', title: 'ROS 2 Tutorials - ROS 2 Humble For Beginners', url: 'https://www.youtube.com/playlist?list=PLLSegLrePWgJudpPUof4-nVFHGkB62Izy', note: 'This playlist covers basic beginner concepts for ROS 2 Humble.'},
        {type: 'video', title: 'Free Robotics Crash Courses', url: 'https://www.youtube.com/playlist?list=PLLSegLrePWgJk6dfV-UXSh2TZ74wNntWt', note: 'This playlist contains ROS2 crash courses for beginners to intermediate concepts. Refers to videos 1-3 for beginner concepts and videos 4-6 for intermediate concepts.'},
        {type: 'video', title: 'Getting Ready to Build With ROS 2', url: 'https://www.youtube.com/playlist?list=PLunhqkrRNRhYYCaSTVP-qJnyUPkTxJnBt', note: 'This playlist contains tutorials on getting started with ROS 2 development.'},
      ], 
      optional: [
        {type: 'video', title: 'Building a Mobile Robot', url: 'https://www.youtube.com/playlist?list=PLunhqkrRNRhYAffV8JDiFOatQXuU-NnxT', note: 'This playlist explores building of a mobile robot using ROS 2'},
      ]
    }, 
    evaluationCriteria: ['Implementation Quality', 'Functionality', 'ROS 2 Understanding', 'Creativity and Innovation'], 
    contactdetails: ['For any queries regarding the task, please reach out to ','Dakshesh (+91 9703537152)',' Vatsal (+91 7011367535)'],
    submissionUrl: 'https://example.com/asme-demo/submit/soft-02', 
    tags: ['Python', 'ROS 2', 'Simulation'] },
]