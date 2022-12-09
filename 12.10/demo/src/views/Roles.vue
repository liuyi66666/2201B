<template>
  <div>
      <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>角色列表</h1>
    <!-- 卡片 -->
    <el-card>
      <el-button type="primary" @click="open" class="but1">添加角色</el-button>
      <!-- 表格 -->
      <el-table :data="roles" border style="width: 100%">
        <!-- 表格展开行 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <!-- props.row  就相当于 scope.row 当前行的数据信息-->
            <!-- {{scope.row}} -->
            <p v-if="scope.row.children.length != 0">
              <el-tag>{{scope.row.children[0].authName}}</el-tag>
              <el-tag>{{scope.row.children[0].children[0].authName}}</el-tag>
              <el-tag type="success" v-for="(item,i) in  scope.row.children[0].children[0].children" :key="i">{{item.authName}}</el-tag>
            </p>
          </template>
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column fixed="right" label="操作" width="400">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" type="primary" icon="el-icon-edit" size="small">编辑</el-button>
            <el-button @click="del(scope.row.id)" type="danger" icon="el-icon-delete-solid" size="small">删除</el-button>
            <el-button @click="modify(scope.row)" type="warning" icon="el-icon-s-tools" size="small">修改权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加角色弹出框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-show="title == '添加角色'" @click="submitForm('ruleForm')">立即添加</el-button>
          <el-button type="primary" v-show="title == '编辑角色'" @click="save">保存修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 分配权限弹出框 -->
    <el-dialog title="分配权限" :visible.sync="treeVisible" width="50%">
      <!-- 树形控件 -->
      <!-- :data 绑定树形控件上的数据 -->
      <!-- show-checkbox  显示复选框 -->
      <!-- default-expand-all 默认展开 -->
      <!-- node-key  加快渲染  相当于  v-for循环中的  :key -->
      <!-- highlight-current  高亮当前选中的节点 -->
      <!-- ref  相当于 id属性名 #   获取id对应的元素  document.getElementById("ref") -->
      <!-- ref="tree" 获取对应的元素  this.$refs. tree   相当于  document.getElementById  -->
      <el-tree :data="rights" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps"></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="getKey">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editId: "", // 编辑id
      title: "",
      roles: [],  //角色列表
      dialogVisible: false, // 控制弹出框显示和隐藏
      ruleForm: {
        roleName: "", //角色名称
        roleDesc: "", // 角色描述
      },
      rules: {  // 校验
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur' }
        ],
      },
      treeVisible: false, // 树形控件弹出框
      rights: [],// 权限列表
      defaultProps: {  // 配置树形控件
        children: 'children',
        label: 'authName'  // 数据中要展示的文字信息
      },
      modifyId: "",  // 修改权限的角色id
    }
  },
  methods: {
    getRoles() { // 获取角色列表
      this.$axios.get("roles").then(res => {
        console.log(res);
        this.roles = res.data.data;
      })
    },
    open() {
      this.dialogVisible = true; // 弹出对话框
      this.title = "添加角色"
    },
    submitForm(formName) {// 提交添加的角色
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          //  验证通过执行的代码 提交添加的角色
          this.$axios.post("roles", this.ruleForm).then(res => {
            console.log(res);
            if (res.data.meta.status == 201) {
              this.$message({
                message: '创建成功',
                type: 'success'
              });
              this.resetForm('ruleForm');  // 重置表单
              this.dialogVisible = false; // 关闭模态框
              this.getRoles(); // 获取角色列表数据
            }
          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {  // 重置表单-清空表单
      this.$refs[formName].resetFields();
    },
    del(id) { // 删除
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 提交删除的接口
        this.$axios.delete("roles/" + id).then(res => {
          console.log(res);
          if (res.data.meta.status == 200) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            // 重新渲染页面
            this.getRoles();
          } else {
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
          }
        })


      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    edit(item) {  // 编辑
      console.log(item);
      this.dialogVisible = true;  // 弹出模态框
      this.title = "编辑角色";

      // 数据回填
      this.ruleForm.roleName = item.roleName; // 角色名称
      this.ruleForm.roleDesc = item.roleDesc; // 角色描述

      this.editId = item.id
    },
    save() {  //  保存修改
      this.$axios.put("roles/" + this.editId, this.ruleForm).then(res => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.$message({
            message: '修改角色成功',
            type: 'success'
          });
          this.dialogVisible = false; // 关闭模态框
          // 调用渲染
          this.getRoles();
        } else {
          this.$message({
            message: '修改角色失败',
            type: 'error'
          });
        }
      })
    },
    modify(item) { // 修改权限
      // item就是scope.row  当前行数据信息
      this.treeVisible = true; // 显示树形空件
      this.modifyId = item.id;
    },
    getRights() { // 获取权限数据
      this.$axios.get("rights/tree").then(res => {
        console.log(res);
        this.rights = res.data.data;
      })
    },
    getKey() {  // 获取已选择的id
      // 获取半选中的id
      console.log(this.$refs.tree.getHalfCheckedKeys());
      // 获取全选中的id
    //   this.$refs.tree 获取树状控件这个元素
      console.log(this.$refs.tree.getCheckedKeys());

      let arr1 = this.$refs.tree.getHalfCheckedKeys();
      let arr2 = this.$refs.tree.getCheckedKeys();

      this.$axios.post(`roles/${this.modifyId}/rights`, { rids: [...arr1, ...arr2].join(",") }).then(res => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.$message({
            message: '更新成功',
            type: 'success'
          });
          this.treeVisible = false; // 关闭对话框
          this.getRoles(); // 重新渲染页面
        } else {
          this.$message({
            message: '更新失败',
            type: 'error'
          });
        }
      })

    }
  },
  created() {
    this.getRoles();
    this.getRights(); // 获取权限数据
  },
}
</script>

<style lang="scss" scoped>
.but1{
	// position: absolute;
	// top: 170px;
	// left: 10px;
	margin-left: -30px;
}

</style>
