<template>
  <div class="home">
    <!-- 头部 -->
    <div class="one">
      <div class="hom"> <img src="@/assets/images/Home.png" alt=""> 首页</div>
      <div class="menuone">功能菜单一 &emsp; &emsp;功能菜单二</div>
      <div class="centerr">某某科技有限公司-生产数据中心</div>
      <div class="menuone">功能菜单一 &emsp; &emsp;功能菜单二</div>
      <!-- {{parseTime('{y}-{m}-{d} {h}:{i}:{s}')}} -->
      <div class="last">2022/12.23</div>
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
			<p>超市</p>
		</div>
	   </div>
      </div>
      <!-- 中间部分 -->
      <div class="center">
		<div class="banner">
			 <el-carousel :interval="5000" arrow="always" class="img">
    <el-carousel-item v-for="list in 4" :key="list.id">
      <h3><img src="@/assets/images/1.jpg" alt=""></h3>
      <div class="shu">
        <img class="bg1" src="@/assets/images/bg1.png" alt="">
        <img class="bg1" src="@/assets/images/bg1.png" alt="">
        <img class="bg1" src="@/assets/images/bg1.png" alt="">
        <img class="bg1" src="@/assets/images/bg1.png" alt="">
      </div>
    </el-carousel-item>
  </el-carousel>
  <div class="tupian">
    <img src="@/assets/images/1.jpg" alt="">
    <img src="@/assets/images/1.jpg" alt="">
    <img src="@/assets/images/1.jpg" alt="">
    <img src="@/assets/images/1.jpg" alt="">
    <img src="@/assets/images/1.jpg" alt="">
  </div>
		</div>
		<div class="bannbut">
			<div class="l">
				<div class="toped">标题样式</div>
        <div id="lefs"></div>
			</div>
			<div class="r">
				<div class="top">标题样式</div>
        <canvas id="rigt"></canvas>
			</div>
		</div>
	  </div>
      <!-- 右边部分 -->
      <div class="right">
		<div class="tq">
			<div class="im">
        <img src="@/assets/images/weather.png" alt="">
      </div>
			<div class="zi">
				<p>  气温：<span>20~32℃</span></p>
				<p>降水量：<span>32毫米</span></p>
				<p>  风况:   <span>西北风微风</span></p>
			</div>
		</div>
		<div class="zhu">
      <div class="top">标题样式</div>
      <canvas id="ly"></canvas>
    </div>
		<div class="zhu">
      <div class="top">标题样式</div>
      <canvas id="ze"></canvas>
    </div>
		<div class="zhu">
      <div class="top">标题样式</div>
      <div class="ri">
        <p><dv-border-box-7 :color="['#033c76','#1988bf']">月平均小时：<span>119351</span></dv-border-box-7></p>
        <p><dv-border-box-7 :color="['#033c76','#1988bf']">月平均小时：<span>119351</span></dv-border-box-7></p>
        <p><dv-border-box-7 :color="['#033c76','#1988bf']">月平均小时：<span>119351</span></dv-border-box-7></p>
        <p><dv-border-box-7 :color="['#033c76','#1988bf']">月平均小时：<span>119351</span></dv-border-box-7></p>
        <p><dv-border-box-7 :color="['#033c76','#1988bf']">月平均小时：<span>119351</span></dv-border-box-7></p>
        <p><dv-border-box-7 :color="['#033c76','#1988bf']">月平均小时：<span>119351</span></dv-border-box-7></p>
        
      </div>
    </div>
	  </div>
    </div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
import {parseTime,formatTime} from '@/untils'
export default {
  data () {
    return {
      list:{
        img:"@/assets/images/1.jpg"
      }
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
        left: '10%',
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
        data: ['textone', 'textwo', 'texthree', 'textfour']
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
// 中间下来的折线图
var lef = document.getElementById('lefs');
var myChart = echarts.init(lef);
var option;

option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9,8,10,15,2,12],
      
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [1, 8, 2, 12, 3, 2, 8,12,9,2,11,2],
      
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
};

option && myChart.setOption(option);
// 另一种
var rig = document.getElementById('rigt');
var myChart = echarts.init(rig);
var option;
let xaxisData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
let yaxisData1 = [90, 80, 100, 70, 65, 69, 80, 100, 70, 65, 69, 66];
let yaxisData2 = [70, 50, 80, 60, 62, 54, 34, 66, 60, 55, 50, 45];

option = {
   backgroundColor: "#001829",
   grid: {
      top: "18%",
      left: "1%",
      right: "3%",
      bottom: "1%",
      containLabel: true,
   },
   tooltip: {
      trigger: "axis",
      confine: true,
      backgroundColor: "rgba(255, 132, 90, 0.3)",
      borderColor: "#FF845A",
      extraCssText: "box-shadow: 2px 2px 4px 0px rgba(255, 132, 90, 0.3);",
      textStyle: {
         fontSize: 16,
         color: "#fff",
         fontFamily: "PangMenZhengDao",
      },
      formatter: function (params) {
         var relVal = params[0].name;
         for (var i = 0; i < params.length; i++) {
            relVal +=
               "<br/>" +
               params[i].marker +
               params[i].seriesName +
               ": " +
               params[i].value +
               " 万条";
         }
         return relVal;
      },
      axisPointer: {
         type: "line",
         lineStyle: {
            color: "#FF845A",
         },
      },
   },
   legend: {
      orient: "horizontal",
      right: "3%",
      itemWidth: 20,
      itemHeight: 4,
      icon: "react",
      itemGap: 17,
      align: "right",
      textStyle: {
         color: "#AEC9FF",
         fontSize: 16,
         fontFamily: "AlibabaPuHuiTi-Medium",
      },
   },
   xAxis: {
      data: xaxisData,
      boundaryGap: true,
      axisLine: {
         show: true,
         symbol: ["none", "rect"],
         symbolSize: [6, 12],
         lineStyle: {
            width: 2,
            color: "#537DAA",
         },
      },
      axisTick: {
         show: false,
      },
   },
   yAxis: {
      name: "(万条)",
      nameTextStyle: {
         color: "#AEC9FF",
         fontWeight: 400,
         fontSize: 14,
      },
      axisLabel: {
         color: "#AEC9FF",
      },
      axisLine: {
         show: true,
         symbol: ["none", "rect"],
         symbolSize: [6, 12],
         lineStyle: {
            width: 2,
            color: "#537DAA",
         },
      },
      axisTick: {
         show: false,
      },
      splitLine: {
         show: true,
         lineStyle: {
            color: "rgba(83, 125, 170, 0.2)",
         },
      },
   },
   series: [
      {
         name: "昨天",
         data: yaxisData1,
         type: "line",
         symbol: "circle",
         symbolSize: 3,
         itemStyle: {
            color: "#FF845A",
            shadowColor: "#FF845A",
            shadowBlur: 10,
            borderColor: "#FF845A",
            borderWidth: 3,
            lineStyle: {
               color: "#FF845A",
            },
         },
      },
      {
         name: "今天",
         data: yaxisData2,
         type: "line",
         symbol: "circle",
         symbolSize: 3,
         itemStyle: {
            color: "#5A94C5",
            shadowColor: "#5A94C5",
            shadowBlur: 10,
            borderColor: "#5A94C5",
            borderWidth: 3,
            lineStyle: {
               color: "#5A94C5",
            },
         },
      },
   ],
};
option && myChart.setOption(option);

// 右边的柱状图
var lyy = document.getElementById('ly');
var myChart = echarts.init(lyy);
var option;
option = {
    title: {
        textStyle: { color: '#666', fontSize: 14, fontWeight: 'normal' },
        padding: [5, 0, 0, 0],
    },
    legend: { orient: 'vertical', top: 0, right: 0, itemWidth: 10, itemHeight: 10, icon: 'circle', data: ['男', '女'] },
    grid: { left: 0, top: 50, bottom: 20, right: 20, containLabel: true },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7'],
        axisLine: { lineStyle: { color: '#ccc' } },
        axisTick: { length: 3 },
        axisLabel: { color: '#999' },
    },
    yAxis: {
        type: 'value',
        data: ['0', '10', '20', '30', '40'],
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisLabel: { color: '#999' },
        splitLine: { lineStyle: { color: ['#CEEDFF'], type: [5, 8], dashOffset: 3 } },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        textStyle: { color: '#424242' },
        renderMode: 'html',
        className: 'tooltip',
        order: 'seriesDesc',
    },
    series: [
        {
            name: '女',
            type: 'bar',
            stack: 'total', // ! 多条数据总计 => 堆叠
            barWidth: 24,
            color: '#FFC53D',
            itemStyle: { borderRadius: 0 },
            data: [5, 10, 20, 12, 13, 10, 12],
        },
        {
            name: '男',
            type: 'bar',
            stack: 'total', // ! 多条数据总计 => 堆叠
            barWidth: 24,
            color: '#52A8FF',
            itemStyle: { borderRadius: [12, 12, 0, 0] },
            data: [16, 2, 8, 12, 8, 12, 11],
        },
    ],
};
option && myChart.setOption(option);
// 右边的折线图
var lhy = document.getElementById('ze');
var myChart = echarts.init(lhy);
var option;
  var databar = [40,40,40,40,40,40,40,40,40,40,40,40]
let xLabel = ['1','2', '3', '4', '5', '6', '7', '8','9','10','11','12']
option={
    backgroundColor:'rgb(17,51,35)',
    grid: {
        width:410,
        height:220,
        top: '10%',
        left: '20%',
        right: '0%',
        bottom: '0%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        align: "left",
        right: '10%',
        top:'10%',
        type:'plain',
        textStyle:{
            color:'#ffffff',
            fontSize:16
        },
        icon:'rect',
        itemGap:25,
        itemWidth: 20,
        itemHeight: 8,

        data: [
            {
                name: '昨日'
            },
            {
                name: '今日'
            },
        ]
    },
    grid: {
        top: '15%',
        left: '20%',
        right: '10%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap:false ,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: false,
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                 color: 'rgb(98,127,115)',
                padding: 16,
                fontSize: 14
            },
            formatter: function(data) {
                return data
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgb(37,71,55)',
            },
        },
        axisTick: {
            show: false,
        },
        data: xLabel
    }],
    yAxis:[{
        name: "MW",
        triggerEvent: true,
        nameTextStyle: {
            color: "rgb(98,127,115)",
            fontSize: 12,
            padding: [0,0,0,-50]
        },
        min:0,
        max:40,
        interval:10,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#192a44'
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "rgb(77,83,141)",
                width:4
            }

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgb(98,127,115)',
                verticalAlign: 'top',  //看这里
                align:'left',//看这里
                //调整文字上右下左
                padding: [0,0,0,-30],//看这里
                    },
        },
        axisTick: {
            show: false,
        },
       
    }],
    series: [
        {
            name: '柱图',
            type: 'bar',
            barWidth: '60%',
            data: databar,
            itemStyle: {
            normal: {
                color: 'rgba(35,69,55,.5)'
                
            }
            },
            tooltip: {
                show: false,
            },
            legend:{
                show:false,
            }
        },
        {
        name: '2021',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,188,10, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255,188,10, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(255,188,10)',
                borderColor: 'rgba(255,188,10,0.27)',
                borderWidth: 12

            }
        },
        data: [16, 20, 18, 17, 22, 22, 23, 28, 32, 25, 22, 20]
    }, 
    {
        name: '2020',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1,231,230, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1,231,230, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(1,231,230)',
                borderColor: 'rgba(1,231,230,0.2)',
                borderWidth: 12

            }
        },
        data: [22, 25, 18, 14, 16, 15, 18, 16, 17, 18, 16, 15]
    }, 
    
    ],
}
option && myChart.setOption(option);


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
.hom img{
  margin-top: 15px;
  margin-right: 5px;
  width: 40px;
  height: 40px;
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
// width: 398px;
color: #fff;
border: 1px solid #3c95cf;
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
  font-size: 12px !important;
	border-radius: 50%;
	background-color: #b57525;
	position: absolute;
	left: 20px;
	top: 50px;
}
.gre p{
  margin-top: 2px;
}

.re{
	width: 50px;
	height: 50px;
	border-radius: 50%;
  font-size: 12px !important;
	background-color: #cb4233;
	position: absolute;
	left: 100px;
	top: 20px;
}
.re p{
  margin-top: 5px;
}
.seven{
	width: 40px;
	height: 40px;
	border-radius: 50%;
  font-size: 12px !important;
	background-color: #b57525;
	position: absolute;
	left: 250px;
	top: 20px;
}
.seven p{
  margin-top: 3px;
}
.eleven{
	width: 50px;
	height: 50px;
	border-radius: 50%;
  font-size: 12px !important;
	background-color: #07a179;
	position: absolute;
	left: 320px;
	top: 70px;
}
.eleven p{
  margin-top: 5px;
}
.super{
	width: 50px;
	height: 50px;
	border-radius: 50%;
  font-size: 12px !important;
	background-color: #068bb6;
	position: absolute;
	left: 90px;
	top: 110px;
}
.super p{
  margin-top: 5px;
}
.seve{
	width: 80px;
	height: 80px;
	border-radius: 50%;
  font-size: 12px !important;
	background-color: #014cce;
	position: absolute;
	left: 160px;
	top: 60px;
}
.seve p{
  margin-top: 12px;
}

.center{
  width: 719px;
  height: 100%;
//   background-color: yellowgreen;
  
}
.banner{
  position: relative;
	width: 719px;
	height: 425px;
	// background-color: blueviolet;
}
.banner .img{
  width: 719px;
	height: 425px; 
   position: relative;
}
.banner .img img{

  width: 100%;
 height: 425px;
}
.tupian{
  bottom: 0;
  left: 0;
  position: absolute;
  width: 719px;
  height: 124px;
  // background-color: orange;
}
.tupian img{
  width: 138px;
  margin: 0 2px 0 2px;
  height: 122px;
}
.shu{
  top: 0px;
  left: 0;
  position: absolute;
  width: 719px;
  height: 100px;
  // background-color: orange;
}
.shu .bg1{
  width: 120px !important;
  height: 80px !important;
}
.bannbut{
	width: 719px;
	margin-top: 10px;
	height: 200px;
	display: flex;
	// background-color: red;
}
.l{
	width: 354.5px;
	height: 200px;
	// background-color: peachpuff;
	margin-right: 10px;
}
.l #lefs{
width: 354.5px;
	height: 200px;
}
.r{
	width: 354.5px;
	height: 200px;
	// background-color: brown;
}
#rigt{
  width: 354.5px;
	height: 160px;
}
.toped{
	width: 352.5px;
  text-align: left;
  color: #fff;
  text-indent: 2em;
	height: 38px;
  line-height: 38px;
	border: 1px solid #3c95cf;
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
	border: 1px solid #3c95cf;
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
	// background-color: yellow;
}
.ri{
  width: 100%;
  height: 76%;
  display: flex;
  flex-wrap: wrap;
}

.ri p{
  width: 46%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  margin-right: 10px;
  margin-top: 5px;
}
#ly{
  width: 100%;
  height: 76%;
}
#ze{
   width: 100%;
  height: 75%;
}
</style>

