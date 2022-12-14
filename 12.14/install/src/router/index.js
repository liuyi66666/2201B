import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
  {
    path: '/home',
    name: 'Home',
    component: () =>
					import('../views/Home.vue'),
		children:[
			// {
			// 	// 角色列表
			// 	path: '/wellcome',
			// 	name: 'Wellcome',
			// 	component: () =>
			// 		import('../views/Wellcome.vue')
			// },
			//
			{
				// 角色列表
				path: '/users',
				name: 'Users',
				component: () =>
					import('../views/Usermanagement/Users.vue')
			},
			{
				// 角色列表
				path: '/roles',
				name: 'Roles',
				component: () =>
					import('../views/Jurisdiction/Roles.vue')
			},{
				// 权限列表
				path: '/rights',
				name: 'Rights',
				component: () =>
					import('../views/Jurisdiction/Rights.vue')
			},
			{
				//商品列表
				path: '/goods',
				name: 'Goods',
				component: () =>
					import('../views/Goodstyle/Goods.vue')
			},
			{
				//商品列表添加
				path: '/addgoods',
				name: 'Addgoods',
				component: () =>
					import('../views/Goodstyle/Addgoods.vue')
			},
			{
				//分类参数
				path: '/params',
				name: 'Params',
				component: () =>
					import('../views/Goodstyle/Params.vue')
			},

			{
				//商品分类
				path: '/categories',
				name: 'Categories',
				component: () =>
					import('../views/Goodstyle/Categories.vue')
			},
			{
				//商品分类
				path: '/categoriesup',
				name: 'Categoriesup',
				component: () =>
					import('../views/Goodstyle/Categoriesup.vue')
			},
			{
				//订单列表
				path: '/orders',
				name: 'Orders',
				component: () =>
					import('../views/Orders/Orders.vue')
			},
			{
				//数据报表
				path: '/reports',
				name: 'Reports',
				component: () =>
					import('../views/Dataget/Reports.vue')
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
