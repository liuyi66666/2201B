<template>
  <div>
    <!-- 布局容器 -->
    <el-container>
      <el-header>
        <h1>电商后台管理系统</h1>
        <el-button type="info" @click="quit">退出</el-button>
      </el-header>
      <el-container>
        <el-aside :width="isCollapse ? '65px' : '200px'">
          <!-- 后台管理左侧 -->
          <p @click="isCollapse = !isCollapse" style="color: #fff">
            <i :class="{ active: isCollapse }" class="el-icon-s-operation"></i>
          </p>
          <!-- 左侧导航 -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#373d41"
            text-color="#fff"
            active-text-color="#409eff"
            router
            :collapse="isCollapse"
          >
            <!-- router 路由模式 -->
            <!-- collapse 给侧边导航加展开和收起功能 -->
            <!-- 一级导航 -->
            <el-submenu :index="item.path" v-for="item in menus" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.authName }}</span>
              </template>
              <el-menu-item-group>
                <!-- 二级导航 -->
                <el-menu-item
                  :index="ele.path"
                  v-for="ele in item.children"
                  :key="ele.id"
                  >{{ ele.authName }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [], // 左侧菜单数据
      isCollapse: false // 控制侧边导航展开和收起的  true收起  false 展开
    }
  },
  methods: {
    quit() {
      // 清除本地临时数据  setItem  getItem
      sessionStorage.removeItem("token")
      // 跳转到登录页面
      this.$router.push({ path: "/login" })
    }
  },

  created() {
    // axios请求左侧菜单数据
    this.$axios.get("menus").then((res) => {
      // console.log(res)
      this.menus = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: white;
  color: #333;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
h1 {
  color: black;
}

.el-menu {
  border: none;
}

.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #373d41;
  h1 {
    color: #fff;
  }
}

.el-aside {
  background-color: #373d41;
  color: #333;
  text-align: center;
  height: 100vh; // 100%  h height
  transition: all 0.5s;
  p {
    .active {
      transform: rotate(-90deg);
    }
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
  height: 100vh;
}
</style>
