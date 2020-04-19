import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/register")
  },
  {
    path: "/dashboard",
    component: () => import("../layouts/dashboard"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../pages/dashboard"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "produksi-terkini",
        name: "produksi-terkini",
        component: () => import("../pages/produksi-terkini"),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
