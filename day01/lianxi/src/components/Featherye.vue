<template>
  <div>
    <h1 v-for="item in list" :key="item.id">{{item.name}}</h1>
 </div>
</template>

<script>
export default {
     props:['list'],
  data () {
    return {
       
    }
  },
  methods: {
   
  },
  created () {
  },
  mounted () {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
