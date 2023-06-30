import VueRouter from "vue-router";
import Vue from "vue";

import HomePage from '@/pages/HomePage';
import FlightsSearchPage from '@/pages/FlightsSearchPage';

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
    component: FlightsSearchPage,
  },
  {
    path: "/hotels",
    name: "hotels",
    component: HomePage,
  },
];

const router = new VueRouter({
  routes
});

export default router;
