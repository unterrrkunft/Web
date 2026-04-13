import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export default function TaskFilter() {
  const { filter, setFilter } = useContext(TaskContext)

  return (
    <div className="filters">
      <button
        onClick={() => setFilter('all')}
        disabled={filter === 'all'}
      >
        All
      </button>

      <button
        onClick={() => setFilter('active')}
        disabled={filter === 'active'}
      >
        Active
      </button>

      <button
        onClick={() => setFilter('completed')}
        disabled={filter === 'completed'}
      >
        Completed
      </button>
    </div>
  )
}
