import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  list: [
    { id: 1, name: '吃大桌', done: true },
    { id: 2, name: '走亲戚', done: true },
    { id: 3, name: '吃鸡', done: false }
  ]
}
const mutations = {
  addEdit(state, payload) {
    const id =
      state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1
    state.list.push({
      id,
      name: payload.todoName,
      done: false
    })
  },
  deleteTodo(state, payload) {
    state.list = state.list.filter(item => item.id != payload.id)
  },
  stateChange(state, payload) {
    let list = state.list.find(item => item.id == payload.id)
    list.done = !list.done
  }
}
const getters = {
  footershow(state) {
    return state.list.length > 0
  },
  left(state) {
    return state.list.filter(item => !item.done).length
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters
})

export default store
