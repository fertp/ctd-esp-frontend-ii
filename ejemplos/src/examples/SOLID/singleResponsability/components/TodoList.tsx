import type TodoType from '../types'
import { TodoCard } from './TodoCard'
import { useFethTodos } from '../hooks/useFetchTodos'

// Single-responsibility principle
// En el siguiente componente estamos violando el principio SRP
// Debemos identificar que logica podemos extrar en un nuevo componente
// para mejorar nuestro codigo

const TodoList = () => {
  const { todos } = useFethTodos()

  return (
    <section>
      <h1>To Do List</h1>
      <ul>
        {todos.map((todo: TodoType) => (
          <TodoCard
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </section>
  )
}

export default TodoList
