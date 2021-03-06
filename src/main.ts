import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

const stripe = Stripe(
  "pk_test_51HD7yrHSWtRGR47bhlCHcxXwq0o3BFNxsy9AVO6d6NkOcLt3fjZ1pLX8o4oLtbxrvhIC3ILvLashvE56KBKZYdAg00vUhfsHnn"
);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
