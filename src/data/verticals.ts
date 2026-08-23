import type { Vertical } from './types'

export const verticals: Vertical[] = [
  { id: 'mechanical', name: 'Mechanical', shortDescription: 'Design the structures and mechanisms that make ideas tangible.', backgroundNeeded: 'beginner-friendly', accentColor: 'mechanical', icon: 'gear', exampleDeliverables: ['Model a drive chassis', 'Design a gripper mechanism'], taskIds: ['mech-01'], contact: 'Shreyas: +91 90047 95249' },
  { id: 'electrical', name: 'Electronics', shortDescription: 'Design and build the circuits that make everything else work.', backgroundNeeded: 'beginner-friendly', accentColor: 'electrical', icon: 'chip', exampleDeliverables: ['Build a sensor board', 'Simulate a motor driver'], taskIds: ['elec-01'], contact: 'Viinaayak: +91 81775 47016' },
  { id: 'software', name: 'Software', shortDescription: 'Write the systems that turn engineering into useful tools.', backgroundNeeded: 'beginner-friendly', accentColor: 'software', icon: 'terminal', exampleDeliverables: ['Build a telemetry dashboard', 'Write a robot control script'], taskIds: ['soft-01'], contact: 'Dakshesh: +91 97035 37152' },
]