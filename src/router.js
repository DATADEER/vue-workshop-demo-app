import Vue from "vue";
import Router from "vue-router";
import ExamplePreview from "@/views/ExamplePreview";
import AsyncExamplePreview from "@/views/AsyncExamplePreview";
import Error404 from "@/views/404/index.vue";
import CustomDirective from "@/views/CustomDirective/index.vue";
import Home from "@/views/Home/index.vue";
import DataLoaderView from "@/views/DataLoaderView/index.vue";
import DynamicList from "@/views/DynamicListView/index.vue";
import IsComponent from "@/views/IsComponent/index.vue";
import Lifecycle from "@/views/Lifecycle/index.vue";
import MixinView from "@/views/MixinView/index.vue";
import ModalView from "@/views/ModalView/index.vue";

const LazyLoadExample = () => import("@/views/LazyLoadExample");

Vue.use(Router);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/example-preview", component: ExamplePreview },
  { path: "/async-example-preview", component: AsyncExamplePreview },
  { path: "/lazy-load-example", component: LazyLoadExample },
  { path: "/directive", component: CustomDirective },
  { path: "/data", component: DataLoaderView },
  { path: "/list", component: DynamicList },
  { path: "/iscomponent", component: IsComponent },
  { path: "/lifecycle", component: Lifecycle },
  { path: "/mixin", component: MixinView },
  { path: "/modal", component: ModalView },
  { path: "*", component: Error404 } // has to exist to catch any non existing page requests
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
