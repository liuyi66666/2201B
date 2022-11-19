<template>
  <div>
    <button @click="jia">+</button>
 </div>
</template>

<script>
export default {
  data () {
    return {
        msg:'哈哈哈哈'
    }
  },
  methods: {
    jia(){
        this.$emit('jia',this.msg)
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
