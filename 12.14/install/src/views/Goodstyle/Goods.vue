<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片 -->
    <el-card class="box-card">
      <div class="top">
        <!-- 搜索框 -->
        <div style="margin-top: 15px">
          <el-input
            style="width: 300px"
            placeholder="请输入内容"
            v-model="page.query"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <!-- 添加按钮 -->
        <el-button class="but" type="primary" @click="add">添加用户</el-button>
      </div>

      <!-- 表格 -->
      <el-table :data="goods" border stripe style="width: 100%">
        <el-table-column type="index" label="#" width="60"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称"></el-table-column>
        <el-table-column
          prop="goods_price"
          label="商品价格(元)"
          width="130"
        ></el-table-column>
        <el-table-column
          prop="goods_weight"
          label="商品重量"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="add_time"
          label="创建时间"
          width="180"
        ></el-table-column>

        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
            type="primary"
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>
            <el-button
              size="mini"
              class="el-icon-delete"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="page.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      goods: [],
      total: 0
    }
  },
  methods: {
    // 获取数据
    getGoods() {
      this.$http({
        url: this.$http.addorUrl('/goods'),
        params: this.page,
        method: 'get'
      }).then((res) => {
        console.log(res)
        this.goods = res.data.data.goods
        // 获取总条数
        this.total = res.data.data.total
      })
    },
    // 编辑
    edit(index, row) {
      console.log(index, row)
    },
    // 删除
    del(index, row) {
      console.log(index, row)
    },
    // 点击添加跳转
    add() {
      this.$router.push('/Addgoods')
    },
    // 分页
    handleSizeChange(val) {
      this.page.pagesize = val
      this.getGoods()
    },
    handleCurrentChange(val) {
      this.page.pagenum = val
      this.getGoods()
    }
  },
  created() {
    this.getGoods()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  margin-bottom: 20px;
  .but {
    margin: 12px 0 0 20px;
    height: 43px;
  }
}
</style>
