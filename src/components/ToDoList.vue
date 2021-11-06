<template>
  <div id="todolist">
    <div id="container" v-for="data in todos" :key="data.id">
      <div id="item">
        <div id="text">{{ data.content }}</div>
        <div id="period">{{ this.periods[data.period] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {periods: {dawn: '새벽', morning: '아침', afternoon: '낮', night: '저녁'}}
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  methods: {}
}
</script>

<style>
#container {
  width: 400px;
  height: 20px;
  border-radius: 10px;
}
#container #item {
}
</style>
