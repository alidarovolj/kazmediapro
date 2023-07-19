import axios from "@/utils/axios.js";

const actions = {
  async categoryCases({ commit }) {
    try {
      const { data } = await axios.post("/categoryCases");
      commit("updateCategoryCases", data);
    } catch (error) {
      commit("updateCategoryCases", error);
    }
  },
  async category({ commit }, id) {
    try {
      const { data } = await axios.get("/categoryById/" + id);
      commit("updateCategory", data);
    } catch (error) {
      commit("updateCategory", error);
    }
  },
};
const mutations = {
  updateCategoryCases: (state, res) => {
    state.categoryCases = res;
  },
  updateCategory: (state, res) => {
    state.category = res;
  },
};
const state = {
  categoryCases: null,
  category: null,
};
const getters = {
  getCategoryCases: (state) => state.categoryCases,
  getCategory: (state) => state.category,
};

export default { state, getters, mutations, actions };
