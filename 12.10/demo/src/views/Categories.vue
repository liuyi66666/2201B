<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>分类列表</h1>
    <el-card>
      <el-button type="primary" @click="dialogVisible = true">添加分类</el-button>
      <!-- 树形表格 -->
      <!-- show-index  显示序号 -->
      <!-- index-text 索引列标题 -->
      <!-- stripe  斑马纹 -->
      <!-- :data  绑定数据，渲染数据 -->
      <!-- :columns 配置列 -->
      <!-- :expand-type  默认不展开 -->
      <!-- :selection-type  不显示复选框  默认会显示复选框 -->
      <zk-table class="tb-cate" index-text="序号" show-index stripe border :data="cateList" :columns="columns" :expand-type="false" :selection-type="false">
        <!-- 插槽 -->
        <!-- scope.row 当前行的数据 -->
        <template slot="isok" slot-scope="scope">
          <i class="el-icon-success" v-if="!scope.row.cat_deleted" style="color: lightGreen"></i>
          <i class="el-icon-error" v-else style="color: red"></i>
        </template>
        <!-- 插槽 -->
        <template slot="level" scope="scope">
          <el-tag type="primary" effect="plain" size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag type="success" effect="plain" size="mini" v-else-if="scope.row.cat_level === 1">二级</el-tag>
          <el-tag type="warning" effect="plain" size="mini" v-else>三级</el-tag>
        </template>
        <template slot="opt" scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </template>
      </zk-table>
    </el-card>

    <!-- 对话框 -->
    <el-dialog title="添加分类" :visible.sync="dialogVisible" width="50%">
      <!-- 验证的表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="ruleForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" prop="cat_pid">
          <!-- 级联选择器 -->
          <!-- options 需要展示的数据 -->
          <!-- props  -->
          <!-- checkStrictly: true  单选，可以选择任意一项 -->
          <el-cascader style="width:100%" v-model="idList" :options="allCate" :props="{label:'cat_name',value: 'cat_id',checkStrictly: true}" @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 分页 -->
    <!-- @size-change  每页条数发生变化的时候触发 -->
    <!-- @current-change  当前页码数发生变化触发  -->
    <!-- :current-page  当前页码数 -->
    <!-- :page-sizes 每页可以选择的条数 -->
    <!-- :page-size  当前每页的条数 -->
    <el-pagination 
        @size-change="sizeChange" 
        @current-change="currentChange" 
        :current-page="page.pagenum" 
        :page-sizes="[5, 10, 15, 20]" 
        :page-size="page.pagesize" 
        layout="total, sizes, prev, pager, next, jumper" 
        :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        pagenum: 1, // 当前页码数
        pagesize: 10, // 每页的条数
      },
      total: 100, // 总条数
      ruleForm: {
        cat_name: "",  // 分类名称
        cat_pid: "", // 父级分类
        cat_level: "",  // 分类层级
      },
      dialogVisible: false,
      rules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
        ],
      },
      idList: [], // 级联选择器绑定的数据 是一个数组
      cateList: [],
      allCate:[], //所有分类
      columns: [  // 配置表格列
        //  label  列标题名称 
        // prop  列内容的属性名  与data数据中的属性保持一致
        { label: "分类名称", prop: "cat_name" },
        {
          label: "是否有效",
          prop: "cat_deleted",
          type: "template",
          template: "isok",
        },
        {
          label: "分类等级",
          prop: "cat_level",
          type: "template",
          template: "level"
        },
        {
          label: '操作',
          type: 'template',
          template: 'opt'
        }
      ],
    }
  },
  methods: {
    getCate() { // 获取分类列表
    // 分页数据
      this.$axios.get("categories", {params: this.page}).then(res => {
        console.log(res);
        this.cateList = res.data.data.result
        this.total = res.data.data.total;
      })
    //   所有分类的数据
      this.$axios.get("categories").then(res => {
        console.log(res);
        this.allCate = res.data.data;
      })
    },
    submitForm(formName) {  // 点击添加分类
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.$axios.post("categories", this.ruleForm).then(res => {
            console.log(res);
            if (res.data.meta.status == 201) {
              this.$message({
                message: '创建成功',
                type: 'success'
              });
              this.dialogVisible = false;
              this.getCate();
              this.ruleForm.cat_name = "";
              this.idList = []; // 清空输入框
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {  // 重置分类
      this.$refs[formName].resetFields();
    },
    handleChange() {
      console.log(this.idList);
      if (this.idList.length == 0) {
        this.ruleForm.cat_pid = 0; // 如果要添加1级分类，则父分类Id应该设置为  `0`
        this.ruleForm.cat_level = 0;  // 分类层级 `0`表示一级分类；`1`表示二级分类；`2`表示三级分类
      } else if (this.idList.length == 1) {
        this.ruleForm.cat_pid = this.idList[0]
        this.ruleForm.cat_level = 1;
      } else if (this.idList.length == 2 || this.idList.length == 3) {
        this.ruleForm.cat_pid = this.idList[1];
        this.ruleForm.cat_level = 2;
      }

    },
    sizeChange(val){  // 每页条数发生变化的时候触发
        // val 每页显示的条数
        this.page.pagesize = val;
        this.getCate();
    },
    currentChange(val){  // 页码发生变化触发
        // val  切换的页码数
        this.page.pagenum = val;
        this.getCate();
    }

  },
  created() {
    this.getCate(); // 获取分类列表
  },
}
</script>