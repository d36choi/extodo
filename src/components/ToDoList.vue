<template>
  <div id="todolist">
    <div class="line" v-for="(data, index) in todos" :key="index">
      <div class="item" @click="markDone(index)">
        <div :class="['text', data.done ? 'done' : '']">{{ data.content }}</div>
        <div :class="'period ' + data.period">
          {{ this.periods[data.period] }}
          <font-awesome-icon :icon="this.icons[data.period]" :color="this.colors[data.period]" />
        </div>
      </div>
      <span @click="removeTodo(index)">
        <font-awesome-icon class="trash" icon="trash" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      periods: {dawn: '새벽', morning: '아침', afternoon: '낮', night: '저녁'},
      colors: {dawn: '#FFFFFF', morning: '#FFFFFF', afternoon: '#FFFFFF', night: '#000000'},
      icons: {dawn: 'bed', morning: 'sun', afternoon: 'utensils', night: 'moon'}
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  methods: {
    markDone(index) {
      this.$store.commit('toggleDone', index)
    },
    removeTodo(index) {
      this.$store.commit('removeTodo', index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
</style>
