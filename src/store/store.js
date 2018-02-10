import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    workCounterTime: 25 * 60,
    restCounterTime: 5 * 60,
  },
  getters: {
    getWorkCounterTime: state => state.workCounterTime,
    getWorkCounterTimeInMinutes: state => state.workCounterTime / 60,
    getRestCounterTime: state => state.restCounterTime,
    getRestCounterTimeInMinutes: state => state.restCounterTime / 60,
  },
  mutations: {
    setWorkCounterTime: (state, payload) => {
      state.workCounterTime = payload * 60;
    },
    setRestCounterTime: (state, payload) => {
      state.restCounterTime = payload * 60;
    },
  },
});
