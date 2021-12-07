<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Title name="TO-DO" />
  <!-- @<customEvent 이름>="실행되는 method이름" -->
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  font-family: 'Roboto', sans-serif;
  background: #faedf0;
}
</style>
