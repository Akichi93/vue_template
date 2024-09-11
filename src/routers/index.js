import { createRouter, createWebHistory } from "vue-router";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
  /* options */
});
import login from "../pages/auth/login.vue";
import dashboard from "../pages/dashboard.vue";

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: login,
    meta: { requiresAuth: false },
  },
  {
    path: '/home',
    name: 'dashboard',
    component: dashboard,
    meta: { requiresAuth: true },
  },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth && !User.loggedIn()) {
    next({ name: 'welcome' });
  } else if (!to.meta.requiresAuth && User.loggedIn()) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
}
);

export default router;
