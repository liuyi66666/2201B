import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
		children:[
			{
				// 首页
				path: '/Dashboard',
				name: 'Dashboard',
				component: () =>
					import( '../views/Dashboard.vue')
			},
			{
				// 员工
				path: '/Employees',
				name: 'Employees',
				component: () =>
					import( '../views/employees/Employees.vue')
			},
			{
				// 公司设置
				path: '/Setting',
				name: 'Setting',
				component: () =>
					import( '../views/setting/Setting.vue')
			},
			{
				// 权限设置
				path: '/Permission',
				name: 'Permission',
				component: () =>
					import( '../views/permission/Permission.vue')
			},
			{
				// 工资
				path: '/Salarys',
				name: 'Salarys',
				component: () =>
					import( '../views/salarys/Salarys.vue')
			},
			{
				// 社保
				path: '/Securitys',
				name: 'Securitys',
				component: () =>
					import( '../views/securitys/Securitys.vue')
			},
			{
				// 审批
				path: '/Approvals',
				name: 'Approvals',
				component: () =>
					import( '../views/approvals/Approvals.vue')
			},
			{
				// 组织架构
				path: '/Departments',
				name: 'Departments',
				component: () =>
					import( '../views/departments/Departments.vue')
			},
			{
				// 考勤
				path: '/Attendances',
				name: 'Attendances',
				component: () =>
					import( '../views/attendances/Attendances.vue')
			}
		]
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import( '../views/About.vue')
  },
	{
    path: '/login',
    name: 'Login',
    component: () =>
      import( '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
