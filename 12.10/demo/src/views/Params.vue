<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>分类参数</h1>
    <el-card>
      <el-alert title="注意：只允许为三级分类设置参数" type="warning" show-icon></el-alert>
      <p>
        选择商品类：
        <!-- 级联选择器 -->
        <!-- options 需要展示的数据 -->
        <!-- props  -->
        <!-- checkStrictly: true  单选，可以选择任意一项 -->
        <el-cascader style="width:100%" v-model="idList" :options="allCate" :props="{label:'cat_name',value: 'cat_id'}" @change="handleChange"></el-cascader>
      </p>
      <!-- tabs标签页 -->
      <el-tabs>
        <el-tab-pane label="动态参数">
          <el-button type="primary" @click="dialogVisible = true">添加参数</el-button>
          <!-- 表格 -->
          <el-table :data="para" border style="width: 100%">
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="attr_name" label="参数名称"></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态参数">静态参数</el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 对话框 -->
    <el-dialog title="添加参数" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="参数名称">
          <el-input v-model="form.attr_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idList: [], // 选中的下标组成的数组
      allCate: [],  // 分类列表
      para: [], // 参数列表
      form:{
          attr_name:"",
          attr_sel:"many",
      },
      dialogVisible : false,
    }
  },
  methods: {
    getCate() {
      //   所有分类的数据
      this.$axios.get("categories").then(res => {
        console.log(res);
        this.allCate = res.data.data;
      })
    },
    getPara(){
        this.$axios.get(`categories/${this.idList[2]}/attributes`, { params: { sel: "many" } }).then(res => {
          console.log(res);
          this.para = res.data.data
        })
    },
    handleChange(val) { // 切换级联选择器选项的时候触发
      console.log(val);
      // val  是选中选项的id组成的数组
      if (val.length != 3) {
        this.$message({
          message: '只允许为三级分类设置参数',
          type: 'error'
        });
        this.idList = [];  // 清空级联选择器
      } else {  // 选中三级分类
        this.getPara()
      }
    },
    onSubmit(){ // 提交参数
        this.$axios.post(`categories/${this.idList[2]}/attributes`,this.form).then(res=>{
            console.log(res);
            if(res.data.meta.status == 201){
                this.$message({
                    message: '创建成功',
                    type: 'success'
                });
                this.dialogVisible = false;
                this.getPara();
            } else{
                this.$message({
                    message: res.data.meta.msg,
                    type: 'error'
                });
            }
        })
    }
  },
  created() {
    this.getCate();
  },
}
</script>
