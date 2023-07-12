import VueRouter from "vue-router";
import Vue from "vue";

import HomePage from '@/pages/HomePage';
import HotelsSearchPage from '@/pages/HotelsSearchPage';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/flights",
    name: "flights",
    component: HomePage,
  },
  {
    path: "/hotels",
    name: "hotels",
    component: HotelsSearchPage,
  },
];

const router = new VueRouter({
  routes
});

export default router;
