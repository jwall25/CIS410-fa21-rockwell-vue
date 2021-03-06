import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
    user: null,
    movies: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
  },
  actions: {},
});
