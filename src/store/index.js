import { createStore } from "vuex";
import Registration from "./modules/registration";
import Messages from "./modules/messages";
import Auth from "./modules/auth";
import Cases from "./modules/cases";
import Categories from "./modules/categories";

export default createStore({
  modules: {
    Registration,
    Auth,
    Messages,
    Cases,
    Categories,
  },
  actions: {},
  mutations: {},
  state: {},
  getters: {},
});
