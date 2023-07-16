import axios from "@/utils/axios.js";

const actions = {
  async sendMessage({ commit }, form) {
    try {
      const { data } = await axios.post("/messageSave", form);
      commit("updateCreatedMessage", data);
    } catch (error) {
      commit("updateCreatedMessage", error);
    }
  },
};
const mutations = {
  updateCreatedMessage: (state, res) => {
    state.createdMessage = res;
  },
};
const state = {
  createdMessage: null,
};
const getters = {
  getCreatedMessage: (state) => state.createdMessage,
};

export default { state, getters, mutations, actions };
