<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>用户管理</h1>
    <!-- 卡片 -->
    <el-card>
      <!-- 搜索框 -->
      <div class="search" style="width: 800px">
        <div style="width: 400px">
          <el-input
            placeholder="请输入内容"
            v-model="page.query"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="search"
            ></el-button>

          </el-input>

        </div>
         <el-button type="primary" @click="open" class="but">添加用户</el-button>
      </div>

      <!-- 表格 -->
      <el-table :data="users" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="aaaaa" label="注册时间"></el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <!-- 插槽 -->
          <template slot-scope="scope">
            <!-- scope.row  获取当前行的数据 -->
            <!-- 开关 -->
            <el-switch
              v-model="scope.row.mg_state"
              @change="change(scope.row.id, scope.row.mg_state)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <!-- scope.row  当前行的信息  相当于item -->
            <el-button @click="del(scope.row.id)" type="text" size="small"
              >删除</el-button
            >
            <el-button @click="edit(scope.row)" type="text" size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 对话框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <!-- 带验证的表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <!-- disabled  禁用 -->
          <el-input
            v-model="ruleForm.username"
            :disabled="title == '编辑用户'"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-show="title == '添加用户'">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            v-show="title == '添加用户'"
            @click="submitForm('ruleForm')"
            >添加</el-button
          >
          <el-button type="primary" v-show="title == '编辑用户'" @click="save"
            >保存修改</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 分页 -->
    <!-- @size-change  每页的数量发送变化的时候触发 -->
    <!-- @current-change  当前页码发生变化的时候触发 -->
    <!-- current-page   当前页码数 -->
    <!-- page-sizes   每页可选择的  条数 -->
    <!-- page-size   当前每页的条数 -->
    <!-- <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="page.pagenum" :page-sizes="[2, 5, 10, 15, 20]" :page-size="page.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      editId: "", // 编辑的id
      title: "", // 弹出框的标题
      total: 0, // 用户列表总条数
      page: {
        query: "", // 搜索的内容
        pagenum: 1, // 当前页码
        pagesize: 7 // 每页的条数
      },
      users: [], // 用户列表
      dialogVisible: false, // 控制模态框显示和隐藏
      ruleForm: {
        username: "", // 用户名
        password: "", // 密码
        email: "", // 邮箱
        mobile: "" // 电话
      },
      rules: {
        // 校验  验证
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    getUsers() {
      // 封装获取用户列表
      // 在使用get请求，传递数据  需要放置一个对象中，对象的属性名必须是  params
      this.$axios.get("users", { params: this.page }).then((res) => {
        console.log(res)
        this.users = res.data.data.users
        this.total = res.data.data.total // 总条数
      })
    },
    change(id, type) {
      // 点击开关修改状态
      this.$axios.put(`users/${id}/state/${type}`).then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
      })
    },
    open() {
      // 点击添加按钮
      this.dialogVisible = true // 显示弹出框
      this.title = "添加用户"
    },
    submitForm(formName) {
      // 提交表单验证
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 表单验证通过
          //   alert('submit!');
          // 添加用户的操作
          this.$axios.post("users", this.ruleForm).then((res) => {
            console.log(res)
            if (res.data.meta.status == 201) {
              this.$message({
                message: "创建成功",
                type: "success"
              })
              this.dialogVisible = false // 关闭模态框
              this.getUsers() // 获取用户列表
            } else {
              this.$message({
                message: "创建失败",
                type: "error"
              })
            }
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm(formName) {
      // 重置表单
      this.$refs[formName].resetFields()
    },
    del(id) {
      // 删除
      // 删除的提示
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //   点击确定的回调函数
          this.$axios.delete("users/" + id).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$message({
                type: "success",
                message: "删除成功!"
              })
              this.getUsers() // 调用获取用户列表的方法
            } else {
              this.$message({
                message: res.data.meta.msg,
                type: "error"
              })
            }
          })
        })
        .catch(() => {
          //   点击取消的回调函数
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    search() {
      // 搜索
      this.getUsers() // 调用获取用户的函数
    },
    sizeChange(val) {
      // 每页条数发生变化的时候触发
      // val 每页的条数
      console.log(val)
      this.page.pagesize = val
      this.getUsers() // 调用获取用户列表
    },
    currentChange(val) {
      // 页码变化的时候触发
      // val 就是页码数
      console.log(val)
      this.page.pagenum = val
      this.getUsers() // 调用获取用户列表
    },
    edit(item) {
      // 编辑
      // item 就是点击编辑当前行的数据
      this.dialogVisible = true // 显示弹出框
      this.title = "编辑用户"
      // 数据回填
      this.ruleForm.username = item.username
      this.ruleForm.mobile = item.mobile
      this.ruleForm.email = item.email

      this.editId = item.id
    },
    save() {
      // 保存修改
      this.$axios.put("users/" + this.editId, this.ruleForm).then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.$message({
            message: "修改成功",
            type: "success"
          })
          this.dialogVisible = false // 关闭弹出框
          this.getUsers() //调用获取用户列表函数
        } else {
          this.$message({
            message: "修改失败",
            type: "error"
          })
        }
      })
    }
  },
  created() {
    this.getUsers() // 调用方法
  }
}
</script>

<style lang="scss" scoped>
.but{
	position: absolute;
	top: 170px;
	left: 700px;
	margin-top: -30px;
}
.serach {
  width: 50%;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
	position: relative;
  .el-input {
    width: 60%;
  }
}
</style>
