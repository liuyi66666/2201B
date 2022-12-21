<template>
  <div class="home">
    <!-- 头部 -->
    <div class="one">
      <div class="hom">首页</div>
      <div class="menuone">功能菜单一 &emsp; &emsp;功能菜单二</div>
      <div class="centerr">某某科技有限公司-生产数据中心</div>
      <div class="menuone">功能菜单一 &emsp; &emsp;功能菜单二</div>
      <div class="last">2021</div>
    </div>
    <!-- 其余部分 -->
    <div class="but">
      <!-- 左边部分 -->
      <div class="left">
       <div class="top">标题样式</div>
       <div id="qv"></div>
	   <div class="top">标题样式</div>
       <div id="qv1"></div>
	   <div class="top">标题样式</div>
       <div class="qv2">
		<div class="gre">
			<p>3</p>
			<p>商标</p>
		</div>
		<div class="re">
			<p>15</p>
			<p>外观</p>
		</div>
		<div class="seven">
			<p>7</p>
			<p>软件</p>
		</div>
		<div class="eleven">
			<p>11</p>
			<p>实用</p>
		</div>
		<div class="super">
			<p>650</p>
			<p>超时</p>
		</div>
		<div class="seve">
			<p>7</p>
			<p>发明</p>
		</div>
	   </div>
      </div>
      <!-- 中间部分 -->
      <div class="center">
		<div class="banner">
			 <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
		</div>
		<div class="bannbut">
			<div class="l">
				<div class="toped">标题样式</div>
			</div>
			<div class="r">
				<div class="top">标题样式</div>
			</div>
		</div>
	  </div>
      <!-- 右边部分 -->
      <div class="right">
		<div class="tq">
			<div class="im"></div>
			<div class="zi">
				<p>  气温：<span>20~32℃</span></p>
				<p>降水量：<span>32毫米</span></p>
				<p>  风况:   <span>西北风微风</span></p>
			</div>
		</div>
		<div class="zhu"></div>
		<div class="zhu"></div>
		<div class="zhu"></div>
	  </div>
    </div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {
	 var chartDom = document.getElementById('qv');
var myChart = echarts.init(chartDom);
var option;

const colors = ['#5470C6', '#EE6666'];
option = {
  color: colors,
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {},
  grid: {
    top: 70,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              'Precipitation  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            );
          }
        }
      },
      // prettier-ignore
      data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[0]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              'Precipitation  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            );
          }
        }
      },
      // prettier-ignore
      data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Precipitation(2015)',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Precipitation(2016)',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [
        3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
      ]
    }
  ]
};

option && myChart.setOption(option);

// 柱形图
 var chart = document.getElementById('qv1');
var myCharted = echarts.init(chart);
var option;
var option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
        }
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['大米', '玉米', '蔬菜', '鸡蛋', '坚果']
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            formatter: function(value) {
                if (value >= 10000) {
                    return (value / 10000).toLocaleString() + '万';
                } else {
                    return value.toLocaleString();
                }
            },
        },
        data: [50000000, 22000000, 10000000, 5000000, 1]
    }],
    series: [{
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgb(57,89,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(46,200,207,1)'
                    }]),
                },
            },
            barWidth: 20,
            data: [50000000, 22000000, 10000000, 5000000, 1]
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [50000000, 50000000, 50000000, 50000000, 1],
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};
option && myCharted.setOption(option);

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
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.home{
  width: 100%;
  height: 100vh;
  background-color: #033c76;
}
.one{
  // overflow: hidden;
  width: 100%;
  float: left;
  height: 80px;
  color: #fff;
  display: flex;
  background-color: #033c76;
}
.hom{
  width: 100px;
  height: 80px;
  
  // background-color: blueviolet;
}
.menuone{
  width: 380px;
  height: 80px;
  line-height: 80px;
  font-size: 14px;
  // background-color: aqua;
  
}
.centerr{
width: 500px;
height: 80px;
font-size: 28px;
font-weight: 700;
line-height: 80px;
color: #e1feff;
// background-color: antiquewhite;

}
.last{
  width: 150px;
  height: 80px;
  
  line-height: 80px;
  // background-color: palevioletred;
}
.but{
  width: 100%;
//   background-color: aqua;
  height: 89%;
  display: flex;
}
.left{
  width: 400px;
  height: 100%;
//   background-color: goldenrod;
  
}
.top{
height: 38px;
text-align: left;
text-indent: 2em;
line-height: 38px;
width: 398px;
color: #fff;
border: 1px solid #ccc;
}
#qv{
	width: 400px;
	height: 172px;
	// background-color: orangered;
}
#qv1{
	width: 400px;
	height: 172px;
	// background-color: orangered;
}
.qv2{
	width: 400px;
	height: 172px;
	position: relative;
	color: #fff;
	// background-color: orangered;
}
.gre{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #b57525;
	position: absolute;
	left: 20px;
	top: 50px;
}
.re{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #cb4233;
	position: absolute;
	left: 100px;
	top: 20px;
}
.seven{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #b57525;
	position: absolute;
	left: 250px;
	top: 20px;
}
.eleven{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #07a179;
	position: absolute;
	left: 320px;
	top: 70px;
}
.super{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #068bb6;
	position: absolute;
	left: 90px;
	top: 110px;
}
.seve{
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #014cce;
	position: absolute;
	left: 160px;
	top: 60px;
}

.center{
  width: 719px;
  height: 100%;
//   background-color: yellowgreen;
  
}
.banner{
	width: 719px;
	height: 425px;
	background-color: blueviolet;
}
.bannbut{
	width: 719px;
	margin-top: 10px;
	height: 200px;
	display: flex;
	background-color: red;
}
.l{
	width: 354.5px;
	height: 200px;
	background-color: peachpuff;
	margin-right: 10px;
}
.r{
	width: 354.5px;
	height: 200px;
	background-color: brown;
}
.toped{
	width: 352.5px;
	height: 38px;
	border: 1px solid #ccc;
}
.right{
  width: 400px;
  height: 100%;
//   background-color: palevioletred;
  
}
.tq{
	width: 398px;
	height: 68px;
	display: flex;
	justify-content: space-between;
	border: 1px solid #ccc;
}
.im{
	width: 100px;
	height: 68px;
}
.zi{
	width: 200px;
	height: 68px;
	font-size: 14px;

}
.zi p{
	height: 22px;
	line-height: 22px;
	color: #92aac2;
}
.zi p span{
	color: #fff;
}
.zhu{
	width: 400px;
	height: 189px;
	background-color: yellow;
}
</style>

