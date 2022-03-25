//路由器对象
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savePosition) {
    return { x: 0, y: 0 };
  },
});
