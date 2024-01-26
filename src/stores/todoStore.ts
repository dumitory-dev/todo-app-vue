import { defineStore } from 'pinia'
import { TodoService } from '@/application/TodoService'
import { LocalStorageTodoRepository } from '@/infrastructure/LocalStorageTodoRepository'
import type { Todo } from '@/domain/Todo'

export const useTodoStore = defineStore('todo', {
    state: () => {
        const repository = new LocalStorageTodoRepository()
        const service = new TodoService(repository)

        return {
            todos: service.getTodos(),
            service: service
        }
    },
    actions: {
        addTodo(newTodo: Todo) {
            this.service.addTodo(newTodo)
            this.todos = this.service.getTodos()
        },
        toggleTodoCompletion(id: string) {
            this.service.toggleTodoCompletion(id)
            this.todos = this.service.getTodos()
        },
        updateTodoTitle(todo: Todo) {
            this.service.updateTodo({
                ...todo
            })
            this.todos = this.service.getTodos()
        },
        deleteTodoById(id: string) {
            this.service.deleteTodo(id)
            this.todos = this.service.getTodos()
        }
    },
    getters: {
        todos_data: (state) => { return state.todos }
    }
})
