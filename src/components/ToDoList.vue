<template>
  <div id="todolist">
    <div class="container" v-for="data in todos" :key="data.id">
      <div class="item">
        <div class="text">{{ data.content }}</div>
        <div :class="'period ' + data.period">{{ this.periods[data.period] }}</div>
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
  }
}
</script>

<style lang="scss" scoped>
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
  flex-basis: fit-content;

  .item {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 1em 0;

    .text {
      text-align: left;
      flex-grow: 1;
      flex-basis: fit-content;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .period {
      font-weight: 800;
      padding: 0.2em 0.4em;
      border-radius: 5px;
    }
    .dawn {
      background: grey;
    }
    .morning {
      background: orange;
    }
    .afternoon {
      background: skyblue;
    }
    .night {
      background: yellow;
    }
  }
}
</style>
