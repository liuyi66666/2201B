<template>
  <div>
    <h1>父传子</h1>
    <featerye :list="list"></featerye>

    <h2>子传父</h2>
    <sonye :msg="msg" @jia="che">+</sonye>
    <p>{{add}}</p>

    <h2>兄弟组件传值</h2>

    <h2>v-model数据绑定</h2>
   <inpzujian v-model="inputvalue"></inpzujian>
   <p>{{this.inputvalue}}</p>

   <h2 >vuex组件传值</h2>
   <p>{{this.$store.state.lik}}</p>
   
   <h2>ref和$refs实现组件之间通信</h2>
   <Refye ref="far"></Refye>
    <h2>本地存储 {{age}}</h2>
 </div>
</template>

<script>
import Featerye from "../components/Featherye.vue"
import Sonye from "../components/Sonye.vue"
import Inpzujian from "../components/Inpzujian.vue"
import Refye from "../components/Refye.vue"
export default {
  data () {
    return {
      age:'',
      inputvalue:'',
      value:"",
      add:[],
      list:[
        {
          name:666,
          sex:'nv'
        },{
          name:777,
          sex:'nvv'
        }
      ]
    }
  },
  components:{
    Featerye,
    Sonye,
    Inpzujian,
    Refye,
  },
  methods: {
    che(val){
      this.add=val
      console.log(this.add)
    }
  },
  created () {
    // 本地存储
    this.age=sessionStorage.getItem('age')
  },
  mounted () {
    // ref

    console.log(this.$refs.far)
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>

