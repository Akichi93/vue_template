import { createRouter, createWebHistory } from "vue-router";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
  /* options */
});
import login from "../pages/auth/login.vue";
import dashboard from "../pages/dashboard.vue";
import listProduct from "../pages/products/listProduct.vue";
import listCustomer from "../pages/customers/listCustomer.vue";
import listSupplier from "../pages/suppliers/listSupplier.vue";
import listOrder from "../pages/orders/listOrder.vue";
import addOrder from "../pages/orders/addOrder.vue";


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
  {
    path: '/listproduct',
    name: 'listProduct',
    component: listProduct,
    meta: { requiresAuth: true },
  },
  {
    path: '/listcustomer',
    name: 'listCustomer',
    component: listCustomer,
    meta: { requiresAuth: true },
  },
  {
    path: '/listsupplier',
    name: 'listSupplier',
    component: listSupplier,
    meta: { requiresAuth: true },
  },

  {
    path: '/listorder',
    name: 'listOrder',
    component: listOrder,
    meta: { requiresAuth: true },
  },

  {
    path: '/addorder',
    name: 'addOrder',
    component: addOrder,
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
