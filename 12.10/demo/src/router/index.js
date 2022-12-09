import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: "/index"
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/login', // 登录页面
		name: 'Login',
		component: () => import('../views/Login.vue')
	},

	{
		path: '/index', // 后台首页页面
		name: 'Index',
		component: () => import('../views/Index.vue'),
		// 子路由
		children: [{
				path: '/users', // 用户列表页面
				name: 'Users',
				component: () => import('../views/Users.vue'),
			},
			{
				path: '/roles', // 角色列表页面
				name: 'Roles',
				component: () => import('../views/Roles.vue'),
				meta: {
					title: '角色列表'
				}
			},
			{
				path: '/rights', // 权限列表页面
				name: 'Rights',
				component: () => import('../views/Rights.vue'),
			},
			{
				path: '/goods', // 商品列表页面
				name: 'Goods',
				component: () => import('../views/Goods.vue')
			},
			{
				path: '/add', // 添加商品页面
				name: 'Add',
				component: () => import('../views/Add.vue')
			},
			{
				path: '/categories', // 分类列表页面
				name: 'Categories',
				component: () => import('../views/Categories.vue')
			},
			{
				path: '/params', // 分类参数
				name: 'Params',
				component: () => import('../views/Params.vue')
			},
			{
				path: '/orders', // 订单管理
				name: 'orders',
				component: () => import('../views/Orders.vue')
			},
		]
	}
]

const router = new VueRouter({
	routes
})
// 全局导航守卫
router.beforeEach((to, from, next) => { // to到哪儿去  from从哪儿来  next执行下一步 放行
	if (sessionStorage.getItem("token")) {
		next(); // 执行下一步 放行
	} else {
		if (to.path == "/login") {
			next();
		} else {
			next('/login'); // 跳转的意思
		}

	}
})


export default router
