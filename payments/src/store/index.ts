import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stripe: Stripe(
      "pk_test_51HD7yrHSWtRGR47bhlCHcxXwq0o3BFNxsy9AVO6d6NkOcLt3fjZ1pLX8o4oLtbxrvhIC3ILvLashvE56KBKZYdAg00vUhfsHnn"
    ),
    paypal: paypal
  },
  mutations: {},
  actions: {},
  modules: {}
});
