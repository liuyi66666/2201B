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
				path: '/userlist',
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
			{
				//商品列表
				path: '/goodslist',
				name: 'Goodslist',
				component: () =>
					import('../views/Goodstyle/Goodslist.vue')
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
				path: '/classifylist',
				name: 'Classifylist',
				component: () =>
					import('../views/Goodstyle/Classifylist.vue')
			},

			{
				//商品分类
				path: '/categorieslist',
				name: 'Categorieslist',
				component: () =>
					import('../views/Goodstyle/Categorieslist.vue')
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
				path: '/orderlist',
				name: 'Orderlist',
				component: () =>
					import('../views/Orders/Orderlist.vue')
			},
			{
				//数据报表
				path: '/Datalist',
				name: 'Datalist',
				component: () =>
					import('../views/Dataget/Datalist.vue')
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
