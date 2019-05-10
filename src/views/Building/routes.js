import Data from "./Data";
import Detail from "./Detail";
import Edit from "./Edit";

/* webpackChunkName: "BUILDING" */

// const Data = () => import("./Data");
// const Detail = () => import("./Detail");
// const Edit = () => import("./Edit");

export const BUILDING_ROUTES = [
  { path: "/building/data", component: Data },
  { path: "/building/detail", component: Detail },
  { path: "/building/edit", component: Edit }
];
