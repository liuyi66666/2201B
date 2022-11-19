<template>
  <div>
   
 </div>
</template>

<script>
export default {
  data() {
    return {
       
    };
  },
  methods: {
   
  },
  created() {
    // 兄弟传过来的
    this.$bus.$on('brother',(bro)=>{
        console.log(bro);
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
