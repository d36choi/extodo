<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Title name="TO-DO" />
  <!-- @<customEvent 이름>="실행되는 method이름" -->
  <to-do-input @add-to-do="addToDo" />
  <to-do-list :todos="todos" />
</template>

<script>
import Title from './components/Title.vue'
import ToDoInput from './components/ToDoInput.vue'
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    Title,
    ToDoInput,
    ToDoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
