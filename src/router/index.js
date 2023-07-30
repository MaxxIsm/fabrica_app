import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/image/:imageId",
      name: "image",
      component: () => import("@/views/ImageView.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("@/views/FavoritesView.vue"),
    },
  ],
});

export default router;
