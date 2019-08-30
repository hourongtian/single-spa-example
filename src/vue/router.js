import Router from "vue-router";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/vue",
      name: "index",
      component: () => import("./index.vue")
    },
    {
      path: "/vue/signin",
      name: "signin",
      component: () => import("./signin.vue"),
      meta: {
        withMenu: true
      }
    }
  ]
});
