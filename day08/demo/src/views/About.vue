<template>
  <div>
    <!-- 模板字符串 -->
    <h1>{{msg}}</h1>
    <span v-bind:title="mssage">鼠标悬停几秒查看提示信息</span>
    <p v-if="seen">现在你看到我了</p>

     <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>

   <p>{{ value }}</p>
  <input v-model="value">

  <p v-if="flag">你好啊</p>
  <p v-else>啦啦啦领取</p>
  <button @click="chang">修改</button>

  <p v-show="flag">在做神魔呢</p>
  
  <p v-for="(item,index) in list" :key="index">{{item.name}}</p>
 </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'你好啊',
      mssage:'页面加载于'+new Date().toLocaleString(),
      seen: true,
      message:'helloworld',
      value:'',
      flag:true,
      list:[
        {name:'哈哈哈'},
        {name:'嘎嘎嘎'},
        {name:'嘻嘻嘻'},
        {name:'嘿嘿嘿'},
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    chang(){
      this.flag=!this.flag
    }
  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
