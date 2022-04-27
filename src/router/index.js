import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home'),
  },
  {
    path: '/panier',
    name: 'Cart',
    component: () => import('@/pages/Cart'),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/pages/Payment'),
  },
  {
    path: '/boutique/collection/:id',
    name: 'BoutiqueColl',
    props: true,
    component: () => import('@/pages/Boutique'),
  },
  {
    path: '/boutique/categorie/:id',
    name: 'BoutiqueCat',
    props: true,
    component: () => import('@/pages/Boutique'),
  },
  {
    path: '/bijoux/:id',
    name: 'productDetail',
    props: true,
    component: () => import('@/pages/Product'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
