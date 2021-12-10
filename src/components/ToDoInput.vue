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
    <button class="submit-button" type="button" @click="addToDo">제출</button>
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

<style lang="scss">
#todoinput {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  input {
    margin: 0 5px;
    border: 2px solid #000;
    border-radius: 5px;
    width: 300px;
    height: 30px;
  }
  .v-model-select {
    margin: 0 5px;
  }
  .submit-button {
    width: 50px;
    height: 30px;
    margin: 0 5px;
    border: none;
    background: #ec255a;
    border-radius: 5px;
    color: white;
    font-weight: 700;
  }
}
</style>
