import {createStore} from 'vuex'
// 저장소 생성이라고 보면된다
const store = createStore({
  state() {
    return {
      // 컴포넌트에서 접근가능
      count: 0,
      todos: []
    }
  },
  mutations: {
    // state 변수는 외부 컴포넌트에서 수정 불가능하므로
    // mutation 내 정의된 함수를 이용해야 상태의 변경 가능하다
    implement(state) {
      state.count = state.count + 1
    },
    addTodo(state, content) {
      state.todos.push(content)
    }
  }
})

export default store
