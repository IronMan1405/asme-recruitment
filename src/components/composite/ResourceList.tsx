import type { Resource } from '../../data/types'
import { ResourceCard } from './ResourceCard'

interface ResourceListProps {
  resources: Resource[]
}

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="resource-list">
      {resources.map((resource) => (
        <ResourceCard resource={resource} key={`${resource.type}-${resource.title}`} />
      ))}
    </div>
  )
}