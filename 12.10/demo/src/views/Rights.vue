<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>权限列表</h1>
    <el-card>
      <!-- 表格 -->
      <el-table :data="rights" stripe border style="width: 100%">
          <el-table-column type="index"></el-table-column>
        <el-table-column prop="authName" label="权限名称"></el-table-column>
        <el-table-column prop="path" label="权限路径"></el-table-column>
        <el-table-column prop="id" label="权限id"></el-table-column>
        <el-table-column prop="level" label="权限等级">
            <!-- 插槽 -->
            <template slot-scope="scope">
                <el-tag v-show="scope.row.level == 0">一级</el-tag>
                <el-tag type="success" v-show="scope.row.level == 1">二级</el-tag>
                <el-tag type="warning" v-show="scope.row.level == 2">三级</el-tag>
            </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rights: [],// 权限列表
    }
  },
  methods: {
    getRights() { // 获取权限列表
      this.$axios.get("rights/list").then(res => {
        console.log(res);
        this.rights = res.data.data
      })
    }
  },
  created() {
    this.getRights();
  },
}
</script>
