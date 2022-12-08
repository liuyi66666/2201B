import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/welcomeTo" // 重定向:重新指向其它path,会改变网址
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        // 欢迎页面
        path: "/welcomeTo",
        name: "welcomeTo",
        component: () => import("../views/WelcomeTo.vue")
      },
      {
        // 用户管理
        // 用户列表
        path: "/users",
        name: "users",
        component: () => import("../views/UsersView.vue")
      },
      {
        // 权限管理
        // 角色列表
        path: "/roles",
        name: "roles",
        component: () => import("../views/RolesView.vue")
      },
      {
        // 权限列表
        path: "/rights",
        name: "rights",
        component: () => import("../views/RightsView.vue")
      },
      {
        // 商品管理
        // 商品列表
        path: "/goods",
        name: "goods",
        component: () => import("../views/GoodsView.vue")
      }
    ]
  },
  {
    // 登录页面
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue")
  }
]

const router = new VueRouter({
  routes
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   if (sessionStorage.getItem("token")) {
//     next()
//   } else {
//     if (to.path == "/login") {
//       next()
//     } else {
//       next("/login")
//     }
//   }
// })

export default router
