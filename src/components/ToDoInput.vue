<template>
  <div id="todoinput">
    <input type="text" v-model="content" @keypress.enter="addToDo" />
    <div>
      <select v-model="period" class="todoselect">
        <option disabled value="">목표 시기를 정해주세요.</option>
        <option value="dawn">새벽</option>
        <option value="morning">아침</option>
        <option value="afternoon">점심</option>
        <option value="night">저녁</option>
      </select>
    </div>
    <button class="submit-button" type="button" @click="addToDo">제출</button>
  </div>
</template>

<script>
import {isEmpty} from '@/utils/helpers.js'
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

      if (isEmpty(this.content)) {
        alert('내용을 입력해주세요.')
        return
      }

      if (isEmpty(this.period)) {
        alert('시기를 선택해주세요.')
        return
      }

      payload.content = this.content
      payload.period = this.period
      payload.done = false
      this.$store.commit('addTodo', payload)
      this.content = ''
    },
    isEmpty
  }
}
</script>

<style lang="scss">
@import '@/assets/style.scss';
</style>
