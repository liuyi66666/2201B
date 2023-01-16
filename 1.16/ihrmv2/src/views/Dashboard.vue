<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="24">
        <el-card shadow="always">
          <div class="big">
            <div class="left">
							<img src="@/assets/logo.png" alt="">
						</div>
            <div class="right">
							<h1>早安，小朋友你是否有很多疑问，祝你开心每一天!</h1>
							<h3>小朋友你是否有很多疑问|传智博客-总裁办</h3>
						</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.big{
	height: 120px;
}
.left {
  float: left;
  width: 120px;
  height: 120px;
  // background: pink;
	border-radius:50%;
}
.left img{
	width: 100px;
  height: 100px;
	margin: 15px 0 0 0;
	// border-radius:50%;
}
.right {
  float: left;
  width: 600px;
  height: 120px;
	text-align:left;
  // background: blue;
	margin: 0 0 0 20px;
}
h1{
	margin: 25px 0 0 0;
	font-weight:normal;
}
h3{
	margin: 10px 0 0 0;
	font-weight:normal;
	color:#ccc;
}
</style>
