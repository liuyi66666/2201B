import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: '/Homepage',
        name: 'Homepage',
        component: () => import('../views/Homepage.vue')
      },
      {
        path: '/Structure',
        name: 'Structure',
        component: () => import('../views/Temjg/Structure.vue')
      },
      {
        path: '/Staff',
        name: 'Staff',
        component: () => import('../views/Staff/Staff.vue')
      },
      {
        path: '/Company',
        name: 'Company',
        component: () => import('../views/Company/Company.vue')
      },
      {
        path: '/Jurisdiction',
        name: 'Jurisdiction',
        component: () => import('../views/Jurisdiction/Jurisdiction.vue')
      },
      {
        path: '/Attendance',
        name: 'Attendance',
        component: () => import('../views/Attendance/Attendance.vue')
      },
      {
        path: '/Wages',
        name: 'Wages',
        component: () => import('../views/Wages/Wages.vue')
      },
      {
        path: '/Approval',
        name: 'Approval',
        component: () => import('../views/Approval/Approval.vue')
      },
      {
        path: '/Security',
        name: 'Security',
        component: () => import('../views/Security/Security.vue')
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import( "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
