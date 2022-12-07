<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse?'90px':'200px'">
				<!-- <div>
					管理系统
				</div> -->
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
					background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
					router
        >
				 <el-menu-item index="1">
            <img class="img" src=".././assets/柑橘.png" alt="">
            <span slot="title" class="sp">后台管理系统</span>
          </el-menu-item>

           <el-submenu :index="item.path" v-for="item in menu" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="ele.path" v-for="(ele, index) in item.children" :key="index">{{ele.authName}}
							</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="top">
				<div class="left">
					<div class="ined" ><i class="el-icon-s-fold"  @click="isCollapse=!isCollapse"></i></div>
          <div class="mianbao">
						<el-breadcrumb separator="/">
  						<el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  						<el-breadcrumb-item :to="{ path: '/Userlist' }">用户列表</el-breadcrumb-item>
  						<el-breadcrumb-item :to="{ path: '/Jurisdictionlist' }">权限列表</el-breadcrumb-item>
  						<el-breadcrumb-item :to="{ path: '/Rolelist' }">角色列表</el-breadcrumb-item>
             </el-breadcrumb>
					</div>
				</div>
					<div class="right" @click="gout">退出</div>
				</el-header>
        <el-main>
					<router-view />
				</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
			menu:[],

			isCollapse:false
			}

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
		 gout() {
      this.$confirm("您确认退出登录吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 先清空
          sessionStorage.removeItem("token")
          // 再跳转
          this.$router.push({ path: "/login" })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          })
        })
    }
  },
  created() {
		this.$http.get("/api/menu").then((res) => {
      // console.log(res)
      this.menu = res.data.data
    })
	},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.img{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 10px;
}
.sp{
	font-size: 20px;
	font-weight: 700;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.top{
	background-color: #545c64;
}
.left{
// background-color: aqua;
height: 60px;
	color: #fff;
	float: left;
	font-size: 18px;
	// margin: 10px 0;
	border-radius: 5px;
}
.mianbao{
	height: 20px;
	color: #fff;
}
.ined{
	height: 20px;
	text-align: left;
	margin: 10px 0;
	// float: left;
	// height: 20px;
	// margin-left: -40px;
}
.right{
	width: 80px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	background-color: #ccc;
	float: right;
	margin: 10px 10px;
	border-radius: 5px;
}
</style>
