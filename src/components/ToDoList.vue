<template>
  <div id="todolist">
    <div class="container" v-for="data in todos" :key="data.id">
      <div class="item">
        <div class="text">{{ data.content }}</div>
        <div class="period">{{ this.periods[data.period] }}</div>
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
#todolist {
  margin: 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}
.container {
  background: white;
  width: 500px;
  height: 20px;
  padding: 10px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin: 5px;
}
.container .item {
  width: 500px;
  display: flex;
  justify-content: center;
}
.container .item .text {
  text-align: left;
  flex-grow: 5;
  border-right: solid;
  border-color: rgb(184, 168, 168);
}
.container .item .period {
  flex-grow: 1;
}
</style>
