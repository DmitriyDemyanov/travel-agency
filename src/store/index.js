import Vue from 'vue';
import Vuex from 'vuex';

// А почему flight называется?
import GlobalContent from './modules/GlobalContent';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    GlobalContent,
  },
});
