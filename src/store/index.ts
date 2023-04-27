import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // ユーザー情報
    user: {},
    // ログイン状態(true:ログイン/false:ログアウト)
    isLoggedIn: false,
  },
  getters: {
    /**
     * ユーザー情報を取得する.
     * @param state
     * @returns
     */
    user(state) {
      return state.user;
    },

    /**
     * ログイン状態を取得する.
     * @param state
     * @returns
     */
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    /**
     * 現在ログインしているユーザーを取得する.
     * @param state
     * @param user
     */
    onAuthStateChanged(state, user) {
      // firebaseが返したユーザー情報
      state.user = user;
    },

    /**
     * ログイン状態をセットする.
     * @param state
     * @param isLoggedIn
     */
    onUserLoginStatusChanged(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
  },
  actions: {
    /**
     * ログアウトする.
     * @param context
     */
    logoutUser(context) {
      auth
        .signOut()
        .then(() => {
          context.commit("onAuthStateChanged", null);
          context.commit("onUserLoginStatusChanged", false);
          console.log("vuexのuser(logout):", this.getters.user);
          console.log("vuexのisLoggedIn(logout):", this.getters.isLoggedIn);
        })
        .catch((error) => {
          console.log("エラー：", error);
          console.log("ログアウト失敗");
        });
    },

    /**
     * ユーザー情報とログイン状態を更新する.
     * @param context
     */
    onAuth(context) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log("vuexのonAuthが呼び出される");
          context.commit("onAuthStateChanged", user);
          context.commit("onUserLoginStatusChanged", user.uid ? true : false);
          console.log("vuexのuser:", this.getters.user);
          console.log("vuexのisLoggedIn:", this.getters.isLoggedIn);
        }
      });
    },
  },
  modules: {},
});
