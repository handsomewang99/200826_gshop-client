import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TypeNav from "./components/TypeNav";
import "./plugins/swiper";
import "./mock/mockServer";
import Pagination from "./components/Pagination";

Vue.config.productionTip = false;

Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
