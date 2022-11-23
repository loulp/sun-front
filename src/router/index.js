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
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact'),
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
  {
    path: '/la_maison',
    name: 'lamaison',
    component: () => import('@/pages/House'),
    children: [
      {
        path: '/la_maison/histoire',
        name: 'history',
        component: () => import('@/pages/History'),
      },
      {
        path: '/la_maison/savoir_faire',
        name: 'savoir_faire',
        component: () => import('@/pages/Expertise'),
      },
      {
        path: '/la_maison/inspiration',
        name: 'inspiration',
        component: () => import('@/pages/Inspiration'),
      },
    ],
  },
  {
    path: '/sur-mesure',
    name: 'sur-mesure',
    component: () => import('@/pages/CustomMade'),
  },
  {
    path: '/retours-et-livraison',
    name: 'delivery',
    component: () => import('@/pages/DeliveryAndReturn'),
  },
  {
    path: '/revendeurs',
    name: 'reseller',
    component: () => import('@/pages/Reseller'),
  },
  {
    path: '/cgv',
    name: 'cgv',
    component: () => import('@/pages/CGV'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
