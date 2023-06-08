import Vue from 'vue';
import Vuex from 'vuex';

import flight from './modules/flight';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    flight,
  },
});
