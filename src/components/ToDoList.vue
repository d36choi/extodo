<template>
  <div id="todolist">
    <div id="container" v-for="data in todos" :key="data.id">
      <li id="text">{{ data }}</li>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style></style>
