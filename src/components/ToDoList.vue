<template>
  <div id="todolist">
    <div class="item" v-for="data in todos" :key="data.id">
      <div class="text">{{ data.content }}</div>
      <div :class="'period ' + data.period">
        {{ this.periods[data.period] }}
        <font-awesome-icon icon="sun" :color="this.colors[data.period]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      periods: {dawn: '새벽', morning: '아침', afternoon: '낮', night: '저녁'},
      colors: {dawn: '#FFFFFF', morning: '#FFFFFF', afternoon: '#FFFFFF', night: '#000000'}
    }
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
.item {
  background: white;
  width: 500px;
  margin: 5px;
  padding: 15px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-basis: fit-content;
  // https://getcssscan.com/css-box-shadow-examples
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .text {
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    flex-grow: 1;
    flex-basis: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -3px;
  }
  .period {
    font-weight: 800;
    padding: 0.2em 0.4em;
    border-radius: 5px;
  }
  .dawn {
    background: grey;
    color: white;
  }
  .morning {
    background: orange;
    color: white;
  }
  .afternoon {
    background: skyblue;
    color: white;
  }
  .night {
    background: yellow;
  }
}
</style>
