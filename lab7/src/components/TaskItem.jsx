import { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

export default function TaskItem({ task = {} }) {
  const { deleteTask, toggleTask, editTask } = useContext(TaskContext)

  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(task.text)

  const handleSave = () => {
    editTask(task.id, value)
    setIsEditing(false)
  }

  return (
    <li className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {isEditing ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none'
          }}
        >
          {task.text}
        </span>
      )}

      <button onClick={() => setIsEditing(v => !v)}>
        Edit
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  )
}
