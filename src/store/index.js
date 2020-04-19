import Vue from "vue";
import Vuex from "vuex";
import apiUser from "../apis/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        const { email, password } = user;
        // const encryptedPassword = CryptoJS.PBKDF2(
        //   password,
        //   username
        // ).toString();
        // payload = { ...params, username, password: encryptedPassword };
        apiUser
          .login({ email, password })
          .then(resp => {
            const token = resp.token;
            const user = resp.user;
            localStorage.setItem("token", token);
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        apiUser.logout(localStorage.getItem("token"));
        localStorage.removeItem("token");
        resolve();
      });
    }
  },
  modules: {}
});
