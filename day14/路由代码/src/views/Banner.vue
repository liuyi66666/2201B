<template>
  <div>
    <div>
        <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="test">测试一下</button>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    back(){
        this.$router.back()
    },
    forward(){
        this.$router.forward()
    },
    test(){
         this.$router.go(3)
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
