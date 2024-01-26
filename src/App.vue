<template>
  <div id="todo-app">
    <Header />
    <InputText v-model="newTask" placeholder="Add new task..." @keyup.enter="addTask" />
    <Button label="Add" @click="addTask" style="margin-left: 5px" />
    <div class="task-container">
      <ul>
        <li v-for="task in todos" :key="task.id" class="text-wrapper">
          <p :class="{ strikethrough: task.completed }">
            {{ task.text }}
          </p>
          <div style="margin-left: 5px">
            <Button icon="pi pi-check" class="p-button-success" @click="toggleComplete(task.id)" />
            <Button
              icon="pi pi-times"
              class="p-button-rounded p-button-danger button"
              @click="removeTask(task.id)"
            />
          </div>
        </li>
      </ul>
    </div>
    <ErrorPopup v-if="showErrorPopup" :errorMessage="' Error - Task name cannot be empty'" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useTodoStore } from './stores/todoStore'
import { storeToRefs } from 'pinia'

import Header from './components/Header.vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import ErrorPopup from './components/ErrorPopup.vue'

export default {
  components: {
    Header,
    InputText,
    Button,
    ErrorPopup
  },
  setup() {
    const newTask = ref('')
    const showErrorPopup = ref(false)
    const todoStore = useTodoStore()
    const { todos: todosData } = storeToRefs(todoStore)

    const addTask = () => {
      if (newTask.value.trim() === '') {
        showErrorPopup.value = true
        setTimeout(() => {
          showErrorPopup.value = false
        }, 3000)
        return
      }
      const newTodo = {
        id: Math.random().toString(),
        text: newTask.value,
        completed: false
      }
      todoStore.addTodo(newTodo)
      newTask.value = ''
    }

    const removeTask = (id: string) => {
      todoStore.deleteTodoById(id)
    }

    const toggleComplete = (id: string) => {
      todoStore.toggleTodoCompletion(id)
    }

    return {
      newTask,
      showErrorPopup,
      todos: todosData,
      addTask,
      removeTask,
      toggleComplete
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.centered .card {
  margin-left: 15px;
}

.strikethrough {
  text-decoration: line-through;
}

.button {
  margin-left: 5px;
}

.task-container {
  margin-top: 10px;
  max-height: 400px; /* Максимальная высота контейнера */
  overflow-y: auto; /* Включает вертикальный скролл при необходимости */
  border: 1px solid #ddd; /* Граница контейнера */
  border-radius: 10px; /* Скругление углов */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень для красивого оформления */
  padding: 10px; /* Отступы внутри контейнера */
  background-color: #fff; /* Цвет фона */
}
</style>
./stores/todoStore
