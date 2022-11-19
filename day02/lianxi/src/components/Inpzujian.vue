<template>
  <div>
    <input type="text" :value="value" @input="valueChanged" id="">
 </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
      default:""
    }
  },
  data () {
    return {
      //  value:"" 
    }
  },
  methods: {
   valueChanged(e){
    this.$emit("input",e.target.value)
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
