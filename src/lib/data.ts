import { tasks } from '../data/tasks'
import { verticals } from '../data/verticals'

export const getVerticalById = (id: string) => verticals.find((vertical) => vertical.id === id)
export const getTaskById = (id: string) => tasks.find((task) => task.id === id)
export const getTasksForVertical = (verticalId: string) => tasks.filter((task) => task.verticalId === verticalId)