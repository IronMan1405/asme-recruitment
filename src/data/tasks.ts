import type { Task } from './types'
import { softwareTaskOneInstructions } from './softwareTaskOneInstructions'
import { electricalTaskOneInstructions } from './electricalTaskOneInstructions'

export const tasks: Task[] = [
  { id: 'mech-01', verticalId: 'mechanical', 
    title: 'Demo Task - Drive Chassis Sketch', 
    shortDescription: 'A temporary CAD exercise for exploring dimensions and manufacturability.', 
    difficulty: 'beginner', 
    estimatedTime: '2-3 hrs', 
    prerequisites: ['No experience needed'], 
    instructions: 'mech task', 
    resources: { required: [
        { type: 'tutorial', title: 'Demo CAD constraint guide', url: 'https://example.com/asme-demo/cad-constraints', note: 'Use this placeholder guide to review how dimensions can control a sketch.' }
    ], optional: [{ type: 'other', title: 'Demo chassis reference', url: 'https://example.com/asme-demo/chassis-reference', note: 'Browse this placeholder reference when you want another way to frame the layout.' }] }, 
    evaluationCriteria: ['Clear dimensions', 'Thoughtful component placement'], 
    submissionUrl: 'https://example.com/asme-demo/submit/mech-01', 
    tags: ['CAD', 'demo'] },

  { id: 'elec-01', verticalId: 'electronics', 
    title: 'Batman\'s Countermeasures Await!', 
    shortDescription: 'A temporary circuit exercise for exploring direction control and protection.', 
    difficulty: 'beginner', 
    estimatedTime: '2-3 hrs', 
    prerequisites: ['Basic circuit theory', 'Tinkercad', 'Arduino'], 
    instructions: electricalTaskOneInstructions, 
    resources: { required: [
        { type: 'video', title: 'Arduino Basics 101: Hardware Overview, Fundamental Code Commands', url: 'https://www.youtube.com/watch?v=BtLwoNJ6klE', note: 'Revision of workshop theory, although its much less detailed, great explanation nonetheless' },
        { type: 'video', title: 'How to use Potentiometer with Arduino | analogRead | Arduino Tutorial 5', url: 'https://www.youtube.com/watch?v=lg-QUBLm9eU', note: 'Use of potentiometer with arduino' },
        { type: 'video', title: 'How To Control a DC Motor with an Arduino(Simulation using tinkercad)', url: 'https://www.youtube.com/watch?v=4qpFQPPJ21U', note: 'Use this video to learn how to control a DC motor with an Arduino' },
        { type: 'video', title: 'How to use Potentiometer with Arduino | analogRead | Arduino Tutorial 5', url: 'https://youtu.be/xo4oLCyfUtY?si=UDhyAWTIbXxJCivi', note: 'Use this video to learn how to use a potentiometer with an Arduino' },
    ], optional: [] }, 
    evaluationCriteria: ['Completed projects', 'You get what you f**** deserve! (Joker, 2019)'], 
    submissionUrl: 'https://example.com/asme-demo/submit/elec-01', 
    tags: ['circuits', 'demo'] },

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