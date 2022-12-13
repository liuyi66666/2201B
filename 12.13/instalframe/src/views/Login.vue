<template>
  <div class="login">
    <div class="log">
      <div class="top">
        <div class="img">
          <img src=".././assets/柑橘.png" alt="" />
        </div>
      </div>
      <div class="bom">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="40px" class="demo-ruleForm">
          <el-form-item label="姓名" prop="username">
            <el-input type="text" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass"></el-input>
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
import {setToken} from "@/untils/auth.js"
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass")
        }
        callback()
      }
    }
    return {
      ruleForm: {
        username: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({ url: this.$http.addorUrl("/login"), params: this.ruleForm, method: "post" }).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {

							const {token,username}=res.data.data
              // localStorage.setItem("token", res.data.data.token)
							setToken(token)
							this.$notify({
								title:"登录成功",
								message:"欢迎["+username+"]",
								type:"success",
								duration:2000
							})
              this.$router.replace("/home")
            }
          })
        } else {
          this.$notify({
								title:"登录成功",
								message:res.data.meta.msg,
								type:"error",
							})
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.login {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #0b539e;
}
.log {
  border-radius: 8px;
  width: 400px;
  height: 300px;
  padding: 0 20px;
  margin: 150px auto;
  background-color: #ccc;
}
.top {
  position: relative;
  width: 400px;
  height: 100px;
  // background-color: yellow;
}
.img {
  position: absolute;
  top: -80px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-left: -90px;
  left: 50%;
  background-color: #fff;
}
.img img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 10px auto;
}
.bom {
  margin: 20px 0;
  width: 400px;
  height: 180px;
  // background-color: peru;
}
</style>
