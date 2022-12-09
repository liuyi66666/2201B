<template>
	<div class="login">
		<div class="log">
			<div class="top">
				<div class="img">
					<img src=".././assets/柑橘.png" alt="">
				</div>
			</div>
			<div class="bom">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="40px" class="demo-ruleForm">

					<el-form-item label="姓名" prop="username">
    <el-input type="text" v-model="ruleForm.username" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>
			</div>
		</div>
 </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [   // 用户名校验
          // { required: true, message: '请输入用户名', trigger: 'blur' },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [   // 密码校验
          // { required: true, message: '请输入密码', trigger: 'blur' },
          // { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
      submitForm(formName) { // 点击提交
        this.$refs[formName].validate((valid) => {
          if (valid) {
              // 表单验证通过时执行的代码
            alert('验证成功');
            // 验证成功向后台发送数据
            this.$axios.post("login", this.ruleForm).then(res=>{
                console.log(res);

                // 状态码 是200登录成功
                if (res.data.meta.status == 200){
                    // 只有登录成功之后才会获取token数据
                    sessionStorage.setItem("token", res.data.data.token);
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    // 跳转到index页面
                    // 编程式跳转
                    this.$router.push({path:"/index"});
                } else {
                    // 消息提示框
                    this.$message({
                        message: res.data.meta.msg,
                        type: 'error'
                    });
                }
            })
          } else {
            //   表单验证不通过时执行的代码
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {  // 表单重置
        this.$refs[formName].resetFields();
      }
  },
}
</script>
<style lang="scss" scoped>
.login{
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	background-color: #0b539e;
}
.log{
	border-radius: 8px;
	width: 450px;
	height: 300px;
	padding: 0 20px;
	margin: 150px auto;
	background-color: #ccc;
}
.top{
	position: relative;
	width: 400px;
	height:100px;
	// background-color: yellow;
}
.img{
	position: absolute;
	top: -80px;
	width: 180px;
	height: 180px;
	border-radius: 50%;
	margin-left: -90px;
	left: 50%;
	background-color: #fff;
}
.img img{
	width: 160px;
	height: 160px;
	border-radius: 50%;
	margin: 10px 10px;
}
.bom{
	margin: 20px 0;
	width: 400px;
	height:180px;
	// background-color: peru;
}
</style>
