import {createStore} from 'vuex'
// 저장소 생성이라고 보면된다
const store = createStore({
  state() {
    return {
      // 컴포넌트에서 접근가능
      todos: []
    }
  },
  mutations: {
    // state 변수는 외부 컴포넌트에서 수정 불가능하므로
    // mutation 내 정의된 함수를 이용해야 상태의 변경 가능하다
    addTodo(state, content) {
      state.todos.push(content)
    },
    toggleDone(state, index) {
      state.todos[index].done = !state.todos[index].done
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1)
    }
  }
})

export default store
