import type { Task } from './types'
import { softwareTaskOneInstructions } from './softwareTaskOneInstructions'
import { electricalTaskOneInstructions } from './electricalTaskOneInstructions'
import { mechanicalTaskOneInstructions } from './mechanicalTaskOneInstruction'

export const tasks: Task[] = [
  { id: 'mech-01', verticalId: 'mechanical', 
    title: 'Spider-Man\'s Multi-Purpose Toolkit', 
    shortDescription: 'Design a two-axis camera gimbal and a compact screwdriver assembly in Fusion 360 from the supplied requirements and drawings.', 
    difficulty: 'beginner', 
    estimatedTime: '2-3 hrs', 
    deadline: '31 August 2026, Monday EOD',
    prerequisites: ['No experience needed'], 
    instructions: mechanicalTaskOneInstructions, 
    resources: { required: [
        { type: 'tutorial', title: 'Learn Autodesk Fusion 360 in 30 Days for Complete Beginners!', url: 'https://youtube.com/playlist?list=PLrZ2zKOtC_-C4rWfapgngoe9o2-ng8ZBr&si=G5858X2RlZSmw4xD', note: 'Use this playlist to learn Fusion 360 basics.' }
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
    deadline: '31 August 2026, Monday EOD',
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
    deadline: '31 August 2026, Monday EOD',
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
]