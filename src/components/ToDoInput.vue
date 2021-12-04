<template>
  <div id="todoinput">
    <input type="text" v-model="content" @keypress.enter="addToDo" />
    <div id="v-model-select" class="demo">
      <select v-model="period">
        <option disabled value="">Please select one</option>
        <option value="dawn">새벽</option>
        <option value="morning">아침</option>
        <option value="afternoon">점심</option>
        <option value="night">저녁</option>
      </select>
    </div>
    <button type="button" @click="addToDo">제출</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      period: ''
    }
  },
  methods: {
    addToDo() {
      // vuex commit
      var payload = {}
      payload.content = this.content
      payload.period = this.period
      this.$store.commit('addTodo', payload)
      this.content = ''
    }
  }
}
</script>

<style lang="scss"></style>
