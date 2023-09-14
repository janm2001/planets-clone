import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlanetDetails from "../views/PlanetDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: '/planets/1'
  },
  {
    path: "/planets/:id",
    name: "Planet",
    component: PlanetDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
