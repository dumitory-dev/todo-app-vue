import { type ITodoRepository } from '@/application/TodoService'
import { type Todo } from '@/domain/Todo'

export class LocalStorageTodoRepository implements ITodoRepository {
  private readonly STORAGE_KEY = 'vue-todo-app'

  getAllTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]')
  }

  addTodo(todo: Todo): void {
    const todos = this.getAllTodos()
    todos.push(todo)
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos))
  }

  updateTodo(todo: Todo): void {
    const todos = this.getAllTodos()
    const index = todos.findIndex((t) => t.id === todo.id)
    if (index !== -1) {
      todos[index] = todo
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos))
    }
  }

  deleteTodo(id: string): void {
    const todos = this.getAllTodos()
    const index = todos.findIndex((t) => t.id === id)
    if (index !== -1) {
      todos.splice(index, 1)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos))
    }
  }
}
