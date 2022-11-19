<template>
  <div>
    <button @click="loc">本地存储</button>
 </div>
</template>

<script>
export default {
  data () {
    return {
      age:'330'
    }
  },
  methods: {
    loc(){
      sessionStorage.setItem('age',this.age)
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

