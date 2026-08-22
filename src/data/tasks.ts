import type { Task } from './types'
import { softwareTaskOneInstructions } from './softwareTaskOneInstructions'

export const tasks: Task[] = [
  { id: 'mech-01', verticalId: 'mechanical', title: 'Demo Task - Drive Chassis Sketch', shortDescription: 'A temporary CAD exercise for exploring dimensions and manufacturability.', difficulty: 'beginner', estimatedTime: '2-3 hrs', prerequisites: ['No experience needed'], instructions: '## Problem statement\nCreate a rough chassis concept for a small mobile robot.\n\nStart with a sketch, then turn one important dimension into a constrained CAD model.\n\n```text\nCONSTRAINT: keep the footprint under 200 mm x 150 mm\n```\n\nDocument one design choice in your submission notes.', resources: { required: [{ type: 'tutorial', title: 'Demo CAD constraint guide', url: 'https://example.com/asme-demo/cad-constraints', note: 'Use this placeholder guide to review how dimensions can control a sketch.' }], optional: [{ type: 'other', title: 'Demo chassis reference', url: 'https://example.com/asme-demo/chassis-reference', note: 'Browse this placeholder reference when you want another way to frame the layout.' }] }, evaluationCriteria: ['Clear dimensions', 'Thoughtful component placement'], submissionUrl: 'https://example.com/asme-demo/submit/mech-01', tags: ['CAD', 'demo'] },
  { id: 'elec-01', verticalId: 'electronics', title: 'Demo Task - Motor Driver Simulation', shortDescription: 'A temporary circuit exercise for exploring direction control and protection.', difficulty: 'beginner', estimatedTime: '2-3 hrs', prerequisites: ['Basic circuit theory'], instructions: '## Problem statement\nBuild a simulated motor driver and document how direction control works.\n\nUse a simple schematic to show the main current paths. See [the placeholder reference](https://example.com/asme-demo/motor-driver) only as an example of an external resource.', resources: { required: [{ type: 'documentation', title: 'Demo H-bridge notes', url: 'https://example.com/asme-demo/h-bridge-notes', note: 'Read this placeholder documentation before drawing the switching paths.' }], optional: [{ type: 'datasheet', title: 'Demo motor driver datasheet', url: 'https://example.com/asme-demo/motor-driver-datasheet', note: 'Use this placeholder datasheet to practice finding electrical limits.' }] }, evaluationCriteria: ['Correct direction control', 'Basic protection included'], submissionUrl: 'https://example.com/asme-demo/submit/elec-01', tags: ['circuits', 'demo'] },
  { id: 'soft-01', 
    verticalId: 'software', 
    title: 'Stark\' Workstation', 
    shortDescription: 'Build a computer-vision-based human-computer interaction system that understands hand gestures and controls a computer.', 
    difficulty: 'intermediate', 
    estimatedTime: '4-6 hrs', 
    prerequisites: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI (or an equivalent library)', 'Laptop webcam'], 
    instructions: softwareTaskOneInstructions, 
    resources: { required: [
        { type: 'video', title: 'OpenCV Course - Full Tutorial with Python', url: 'https://youtu.be/oXlwWbU8l2o?si=GLw9_Nfn8n7mltMf', note: 'Use this course for the computer-vision and OpenCV foundations needed for the task.' }, 
        { type: 'video', title: 'Advanced Computer Vision with Python - Full Course', url: 'https://youtu.be/01sAkU_NvOY?si=pa28Wl_s6vp-ZHMj', note: 'Refer to this course for advanced hand-tracking and vision techniques.' }, 
        { type: 'tutorial', title: 'Getting started - Python Programming MOOC 2023', url: 'https://programming-23.mooc.fi/part-1/1-getting-started', note: 'Use this tutorial to refresh Python fundamentals before building the system.',}, 
        {type: 'other', title: 'Code demonstrated in the workshop', url: 'https://gists.github.com/vatsalbansal123/', note: 'Use this code to understand the basics of OpenCV and MediaPipe.'}
    ], optional: [] }, 
    evaluationCriteria: ['Functionality: 50%', 'Robustness & Usability: 20%', 'Code Quality: 20%', 'Innovation: 10%'], 
    submissionUrl: 'https://example.com/asme-demo/submit/soft-01', 
    tags: ['Python', 'computer vision', 'MediaPipe', 'OpenCV', 'robotics'] },
]