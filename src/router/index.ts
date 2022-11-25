import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routingGuardInit from './routing.guard';

import AppLayout from '../layout/AppLayout.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/account/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: AppLayout,
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/demo',
        name: 'demo',
        children: [
          { path: '/demo/demo-card', name: 'DemoCard', component: () => import('../views/demo/DemoCard.vue') },
          { path: '/demo/demo-color', name: 'DemoColor', component: () => import('../views/demo/DemoColor.vue') },
          {
            path: '/demo/demo-list-page',
            name: 'DemoListPage',
            component: () => import('../views/demo/DemoListPage.vue')
          },
          { path: '/demo/demo-table', name: 'DemoTable', component: () => import('../views/demo/DemoTable.vue') }
        ]
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/account',
    name: 'account',
    children: [
      {
        path: '/account/login',
        name: 'login',
        component: LoginView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

routingGuardInit(router);

export default router;
