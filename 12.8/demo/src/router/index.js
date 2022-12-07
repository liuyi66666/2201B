import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'                      
	},
  {
    path: '/home',
    name: 'Home',
    component: Home,
		children:[
			//
			{
				// 角色列表
				path: '/Userlist',
				name: 'Userlist',
				component: () =>
					import('../views/Usermanagement/Userlist.vue')
			},
			{
				// 角色列表
				path: '/rolelist',
				name: 'Rolelist',
				component: () =>
					import('../views/Jurisdiction/Rolelist.vue')
			},{
				// 权限列表
				path: '/jurisdictionlist',
				name: 'Jurisdictionlist',
				component: () =>
					import('../views/Jurisdiction/Jurisdictionlist.vue')
			},
		]
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('../views/About.vue')
  },
	{
    path: '/login',
    name: 'Login',
    component: () =>
      import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
