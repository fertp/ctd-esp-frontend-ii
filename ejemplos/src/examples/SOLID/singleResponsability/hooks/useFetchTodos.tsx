import axios from 'axios'
import { useEffect, useState } from 'react'
import TodoType from '../types'

export const useFethTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/'
      )
      const firstTen = data.slice(0, 10)
      setTodos(firstTen)
    }
    getTodos()
  }, [])

  return { todos, setTodos }
}
