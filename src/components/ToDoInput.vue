<template>
  <div id="todoinput">
    <input type="text" v-model="content" @keyup.enter="addToDo" />
    <button type="button" @click="addToDo">제출</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    addToDo() {
      // vuex commit
      this.$store.commit('addTodo', this.content)
      this.content = ''
    }
  }
}
</script>

<style></style>
