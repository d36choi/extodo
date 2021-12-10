<template>
  <Title name="두루뭉실 투두" />
  <to-do-input />
  <to-do-list />
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

// https://colorhunt.co/palette/161853292c6dfaedf0ec255a
<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
#app {
  font-family: 'Nanum Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  background: #faedf0;
}
</style>
