<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>商品列表</h1>
    <!-- 搜索框 -->
    <div style="margin-top: 15px; width:500px; display:flex">
      <el-input placeholder="请输入内容" v-model="page.query" class="input-with-select">
        <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" @click="$router.push({path: '/add'})">添加商品</el-button>
    </div>
    <el-card>
      <!-- 表格 -->
      <el-table :data="goods" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="450"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格" width="120"></el-table-column>
        <el-table-column prop="goods_number" label="商品数量" width="120"></el-table-column>
        <el-table-column prop="add_time" label="创建时间" width="220">
          <!-- 插槽 -->
          <template slot-scope="scope">
            <!-- 时间秒数转化成本地时间 -->
            {{new Date(scope.row.add_time * 1000).toLocaleString()}}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分页 -->
    <!-- @size-change  每页条数发生变化的时候触发  -->
    <!-- @current-change 切换页码触发  -->
    <!-- :current-page 默认/当前页码数 -->
    <!-- :page-sizes 每页可选择的条数 -->
    <!-- :page-size 当前每页的条数 -->
    <!-- :total  总条数 -->
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="page.pagenum"
      :page-sizes="[5, 10, 15, 20,25,30]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        query: "",  // 查询的内容
        pagenum: 1, // 当前页码
        pagesize: 10, // 每页显示的条数
      },
      total: 0, // 总条数
      goods: [], // 商品列表  
    }
  },
  methods: {
    getGoods() {  // 获取商品列表
      this.$axios.get("goods", { params: this.page }).then(res => {
        console.log(res);
        this.goods = res.data.data.goods;
        this.total = res.data.data.total;
      })
    },
    search() {  // 搜索
      // 重新渲染
      this.getGoods();  
    },
    sizeChange(val){  // 每页条数发生变化的时候触发
        this.page.pagesize = val; 
        // 重新渲染
        this.getGoods();
    },
    currentChange(val){  // 页码切换触发
        this.page.pagenum = val;
        this.getGoods();
    }
  },
  created() {
    this.getGoods();// 调用商品列表函数
  },
}
</script>
