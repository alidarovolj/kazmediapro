import axios from "@/utils/axios.js";

const actions = {
  async cases({ commit }) {
    try {
      const { data } = await axios.get("/cases");
      commit("updateCases", data);
    } catch (error) {
      commit("updateCases", error);
    }
  },
};
const mutations = {
  updateCases: (state, res) => {
    state.cases = res;
  },
};
const state = {
  cases: null,
};
const getters = {
  getCases: (state) => state.cases,
};

export default { state, getters, mutations, actions };
