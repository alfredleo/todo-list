import Vue from 'vue'

const state = {
  tasks: {
    'ID1': {
      name: "Go to shop",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "18:30"
    },
    'ID2': {
      name: "Get bananas",
      completed: true,
      dueDate: "2019/05/13",
      dueTime: "14:30"
    },
    'ID3': {
      name: "Get apples",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "16:00"
    },
  }
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    // delete state.tasks[id] // this does not work, need to use vue own methods to be reactive
    Vue.delete(state.tasks, id)
  }

};

const actions = {
  updateTask({commit}, payload) {
    commit('updateTask', payload)
  },
  deleteTask({commit}, id) {
    commit('deleteTask', id)
  }
};

const getters = {
  tasks: (state) => {
    return state.tasks
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
