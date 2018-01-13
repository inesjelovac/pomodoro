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
    getRestCounterTime: state => state.restCounterTime,
  },
});
