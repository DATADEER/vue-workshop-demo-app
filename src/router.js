import Vue from "vue";
import Router from "vue-router";
import Error404 from "@/views/404/index.vue";
import CustomDirective from "@/views/CustomDirective/index.vue";
import CustomDirectiveStart from "@/views/CustomDirective/start.index.vue";
import Home from "@/views/Home/index.vue";
import DataLoaderView from "@/views/DataLoaderView/index.vue";
import DynamicList from "@/views/DynamicListView/index.vue";
import DynamicListStart from "@/views/DynamicListView/start.index.vue";
import IsComponent from "@/views/IsComponent/index.vue";
import IsComponentStart from "@/views/IsComponent/start.index.vue";
import Lifecycle from "@/views/Lifecycle/index.vue";
import MixinView from "@/views/MixinView/index.vue";
import MixinViewStart from "@/views/MixinView/start.index.vue";
import ModalView from "@/views/ModalView/index.vue";
import ModalViewStart from "@/views/ModalView/start.index.vue";
import RoutingView from "@/views/RoutingView/index.vue";
import ToggleView from "@/views/ToggleView/index.vue";
import VuetifyView from "@/views/Vuetify/index.vue";
import VuetifyStart from "@/views/Vuetify/start.index.vue";
import Pitfalls from "@/views/Pitfalls/index.vue";
import PitfallsStart from "@/views/Pitfalls/start.index.vue";
import SlotView from "@/views/SlotView/index.vue";

const LazyLoadExample = () => import("@/views/LazyLoadExample");

import { BUILDING_ROUTES } from "./views/Building/routes";

Vue.use(Router);

const routes = [
  ...BUILDING_ROUTES,
  { path: "/", name: "Home", component: Home },
  { path: "/lazy-load-example", component: LazyLoadExample },
  { path: "/directive", component: CustomDirective },
  { path: "/start/directive", component: CustomDirectiveStart },
  { path: "/data", component: DataLoaderView },
  { path: "/list", component: DynamicList },
  { path: "/start/list", component: DynamicListStart },
  { path: "/iscomponent", component: IsComponent },
  { path: "/start/iscomponent", component: IsComponentStart },
  { path: "/lifecycle", component: Lifecycle },
  { path: "/mixin", component: MixinView },
  { path: "/start/mixin", component: MixinViewStart },
  { path: "/vuetify", component: VuetifyView },
  { path: "/vuetify/:task", component: VuetifyView },
  { path: "/start/vuetify", component: VuetifyStart },
  { path: "/start/vuetify/:task", component: VuetifyStart },
  { path: "/modal", component: ModalView },
  { path: "/start/modal", component: ModalViewStart },
  { path: "/pitfalls", component: Pitfalls },
  { path: "/pitfalls/:task", component: Pitfalls },
  { path: "/start/pitfalls", component: PitfallsStart },
  { path: "/start/pitfalls/:task", component: PitfallsStart },
  { path: "/slot", component: SlotView },
  {
    path: "/routing",
    name: "Routing",
    component: RoutingView,
    children: [
      {
        path: ":id",
        name: "RoutingById",
        component: RoutingView
      }
    ]
  },
  {
    path: "/routing/:id/name/:name",
    name: "RoutingByIdAndName",
    component: RoutingView
  },
  { path: "/toggle", component: ToggleView },
  { path: "*", component: Error404 } // has to exist to catch any non existing page requests
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
