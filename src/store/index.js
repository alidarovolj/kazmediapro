import { createStore } from "vuex";
import Registration from "./modules/registration";
import Messages from "./modules/messages";
import Auth from "./modules/auth";
import Cases from "./modules/cases";

export default createStore({
  modules: {
    Registration,
    Auth,
    Messages,
    Cases,
  },
  actions: {},
  mutations: {},
  state: {},
  getters: {},
});
