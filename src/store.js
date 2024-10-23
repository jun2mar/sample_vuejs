// src/store.js

import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state: {
    token: null,
    user: []
  },
  mutations: {
    loginSuccess(state, payload){
        state.token = payload.token;
        state.user = payload.user;
    },
    logout(state) {
        state.token = null;
        state.user = [];
    },
  },
  actions: {
    logout(context) {
        context.commit("logout");
    },
  },
  getters: {
    isLoggedIn(state){
        return state.user;
    },
    token: (state) => state.token,
  },
  plugins: [createPersistedState()] // Add the plugin here
});

export default store;
