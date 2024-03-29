import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/itemList",
    component: () => import("../views/ItemList.vue"),
  },
  {
    path: "/keywordSearch",
    component: () => import("../views/KeywordSearch.vue"),
  },
  {
    path: "/hotelDetail/:id",
    component: () => import("../views/HotelDetail.vue"),
  },
  {
    path: "/signUp",
    component: () => import("../views/RegisterAdmin.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/logout",
    component: () => import("../views/LogoutView.vue"),
  },
  {
    // 後ろにidをつけて、その人のところに飛ばせるようにする？
    path: "/userInfo",
    component: () => import("../views/UserInfo.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
