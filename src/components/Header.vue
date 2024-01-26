<template>
  <header class="app-header">
    <h1 class="header-title">ToDoApp</h1>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.app-header {
  position: fixed;
  top: 0%;
  left: 0%;
  background: linear-gradient(141deg, cyan 0%, rebeccapurple 40%, deeppink 90%);
  height: 50px;
  padding: 0.5%;
  width: 100%;
}

.header-title {
  margin: 0;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  width: 100%;
}
</style>
