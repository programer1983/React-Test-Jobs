import React from 'react'


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
}

export const TodoList = (props: PropsType) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button></button>
        </div>
        <ul>
            {props.tasks.map((task) => (
                <li>
                    <input type="checkbox" checked={task.isDone}/><span>{task.title}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

