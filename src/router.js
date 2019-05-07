import Vue from "vue";
import Router from "vue-router";
import ExamplePreview from "@/views/ExamplePreview";
import AsyncExamplePreview from "@/views/AsyncExamplePreview";
const LazyLoadExample = () => import("@/views/LazyLoadExample");

Vue.use(Router);

const routes = [
  { path: "/example-preview", component: ExamplePreview },
  { path: "/async-example-preview", component: AsyncExamplePreview },
  { path: "/lazy-load-example", component: LazyLoadExample }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
