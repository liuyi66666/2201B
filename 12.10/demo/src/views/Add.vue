<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>添加商品</h1>
    <!-- 卡片 -->
    <el-card>
      <el-alert center title="添加商品信息" type="info" show-icon></el-alert>
      <!-- 步骤条 -->
      <el-steps class="steps" :active="active" align-center finish-status="success">
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!-- tabs 标签页 -->
      <!-- :before-leave 切换tab之前触发，如果retrun false  阻止切换 -->
      <el-tabs tab-position="left" :before-leave="beforeLeave">
        <el-tab-pane label="基本信息">
          <!-- 带验证表单 -->
          <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="goods_name">
              <el-input v-model="ruleForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price">
              <el-input v-model="ruleForm.goods_price"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="goods_number">
              <el-input v-model="ruleForm.goods_number"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="goods_weight">
              <el-input v-model="ruleForm.goods_weight"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="goods_cat">
              <!-- 级联选择器 -->
              <!-- options 数据的配置项  相当于表格中的data属性  默认value 是值，文字信息是label -->
              <!-- change  选择不同选项触发事件 -->
              <!-- props 配置 分类列表中的  id和名称 -->
              <el-cascader style="width:100%" 
              :options="cate" 
              :props="{ value: 'cat_id', label: 'cat_name' }" 
              @change="change"></el-cascader>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="商品参数">商品参数</el-tab-pane>
        <el-tab-pane label="商品属性">商品属性</el-tab-pane>  
        <el-tab-pane label="商品图片">
            <!-- 上传 -->
            <!-- action 是提交图片的地址  默认的请求方式是post -->
            <!-- list-type列表类型  图片缩略图 -->
            <!-- :headers 请求头，用来设置token  -->
            <!-- :on-success  上传图片成功的钩子函数 -->
            <el-upload
                class="upload-demo"
                action="http://175.27.228.178:3434/api/private/v1/upload"
                :headers = "headers"
                list-type="picture"
                :on-success="upload">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-tab-pane>
        <el-tab-pane label="商品内容">
            <!-- 富文本 -->
             <quill-editor
                    ref="myQuillEditor"
                    v-model="addForm.goods_introduce"
                    style="height:300px"
            /> 
            <el-button type="primary" style="position:relative" @click="add">添加商品</el-button>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        headers: {Authorization: window.sessionStorage.getItem('token')}, // 图片请求头
      active: 0, // 步骤条的index，从0开始
      ruleForm: {
        goods_name: "", // 商品名称
        goods_price: "", // 商品价格
        goods_number: "", // 商品数量
        goods_weight: "", // 商品重量
        goods_cat: "", // 商品分类
      },
      addForm:{
          pics: [], // 图片路径
          goods_introduce:"", // 商品描述
      },
      rules: {
        goods_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        goods_price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        goods_number: [
          { required: true, message: '请输入商品数量', trigger: 'blur' }
        ],
        goods_weight: [
          { required: true, message: '请输入商品重量', trigger: 'blur' }
        ],
        goods_cat: [
          { required: true, message: '请输入商品分类', trigger: 'blur' }
        ],
      },
      cate: [], // 商品分类列表
    }
  },

  methods: {
    getCate() { // 获取商品分类列表
      this.$axios.get("categories").then(res => {
        console.log(res);
        this.cate = res.data.data;
      })
    },
    change(val) {  // 级联选择器切换的时候触发
        // val 就是列表中的一级二级三级的 id 的数组
        console.log(val);
        // 把数组转化成字符串
        this.ruleForm.goods_cat = val.join(",");
        console.log(this.ruleForm.goods_cat);
        
    },
    beforeLeave(toIndex, fromIndex){  // 切换tab之前
        console.log(toIndex, fromIndex);
        // 切换的下标是1 、 并且只要有一个内容为空， 先阻止切换

        // 判空
        let flag = false; // 设置开关
        for (let i in this.ruleForm){
            if (this.ruleForm[i] == ""){
                flag = true; 
            }
        }
        // 在循环结束之后，判断flag的值，如果flag的值为true, 说明有空值
        if(flag &&  toIndex != 0){
            this.$message({
                message: '请补全内容',
                type: 'error'
            });
            return  false;   // 阻止切换
        } else{
            // 左侧tab切换和上面的要关联一下
            this.active = Number(toIndex);
        }

        
    },
    upload(res){  // 上传图片
        console.log(res);
        if(res.meta.status == 200){
            this.$message({
                message: '上传成功',
                type: 'success'
            });
            this.addForm.pics.push({"pic":res.data.tmp_path});
        }
    },
    add(){ // 添加商品
        this.$axios.post("goods", {...this.ruleForm, ...this.addForm}).then(res=>{
            console.log(res);
            if (res.data.meta.status == 201){
                this.$message({
                    message: '添加成功',
                    type: 'success'
                });
                // 跳转到商品列表页
                this.$router.push({path: "/goods"});
            } else{
                this.$message({
                    message: res.data.meta.msg,
                    type: 'success'
                });
            }
        })
    }

  },

  created() {
    //   页面渲染之前
    // 请求商品分类数据
    this.getCate();// 获取商品分类列表
  },
}
</script>
<style lang="scss" scoped>
.steps {
  margin: 20px 0;
}
.demo-ruleForm {
  text-align: left;
}
</style>

