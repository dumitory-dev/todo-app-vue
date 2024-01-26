import { type Todo } from '@/domain/Todo'

export interface ITodoRepository {
  getAllTodos(): Todo[]
  addTodo(todo: Todo): void
  updateTodo(todo: Todo): void
  deleteTodo(id: string): void
}

export class TodoService {
  constructor(private repository: ITodoRepository) {}

  getTodos(): Todo[] {
    return this.repository.getAllTodos()
  }

  addTodo(newTodo: Todo): void {
    this.repository.addTodo(newTodo)
  }

  toggleTodoCompletion(id: string): void {
    const todo = this.repository.getAllTodos().find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
      this.repository.updateTodo({
        ...todo
      })
    }
  }

  updateTodo(todo: Todo): void {
    this.repository.updateTodo(todo)
  }

  deleteTodo(id: string): void {
    this.repository.deleteTodo(id)
  }
}
