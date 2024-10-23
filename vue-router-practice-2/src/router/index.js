import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/posts",
      children: [
        {
          name: "posts",
          path: "",
          component: () => import("../views/PostsView.vue"),
        },
        {
          path: ":id",
          name: "post",
          component: () => import("../views/PostView.vue"),
        },
      ],
    },
  ],
});

export default router;
