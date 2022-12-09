<template>
  <div class="orders">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 搜索框 -->
      <!-- 搜索框 -->
      <div class="search">
        <div style="width: 400px">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <el-table :data="orders" stripe style="width: 100%" border>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="order_number" label="订单编号" width="250">
        </el-table-column>
        <el-table-column prop="order_price" label="订单价格" width="167">
        </el-table-column>
        <el-table-column prop="address" label="是否付款" width="166">
          <template slot-scope="scope">
            <el-tag size="small" :type="scope.row.order_pay == 0 ? 'primary' : 'danger'" effect="dark">{{
              scope.row.order_pay == 0 ? "已付款" : "未付款"
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="is_send" label="是否发货" width="166">
        </el-table-column>
        <el-table-column prop="create_time" label="下单时间"> </el-table-column>
        <el-table-column prop="address" label="操作">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
          ></el-button>
          <el-button
            type="success"
            icon="el-icon-setting"
            size="small"
          ></el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: {
        pagenum: 1, // 当前页码,
        pagesize: 10 // 每页显示条数
      },
      // 订单列表数据
      orders: []
    }
  },
  methods: {
    getList() {
      this.$axios.get("orders", { params: this.pages }).then((res) => {
        // console.log(res)
        this.orders = res.data.data.goods
        console.log(this.orders)
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 20px;
  .search {
    margin-bottom: 20px;
  }
}
</style>
