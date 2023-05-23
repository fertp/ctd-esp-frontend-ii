import { FC } from 'react'
import TodoType from '../types'

interface Props {
  todo: TodoType
}

export const TodoCard: FC<Props> = ({ todo }) => {
  return <li>{` Tarea ${todo.id}: ${todo.title}`}</li>
}
