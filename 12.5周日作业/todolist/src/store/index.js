import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    addtodo(state, obj) {
      console.log(obj);
      state.list.push(obj)
    },
    // 已完成修改
    strueOne(state, obj){
    state.list[obj.index] = obj 
  },
  // 未完成修改
  strueTwo(state, value){
    state.list[value.index] = value
  }
  },
  actions: {
  },
  modules: {
  }
})
