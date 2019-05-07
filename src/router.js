import Vue from "vue";
import Router from "vue-router";
import ExamplePreview from "@/views/ExamplePreview";

Vue.use(Router);

const routes = [{ path: "/", component: ExamplePreview }];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
