<template>
  <div class="hom">
    <!-- 头部 -->
    <div class="top"> 
      <div class="left">
        <dv-decoration-8 style="width:400px;height:50px;margin: 20px 0 0 0;" />
      </div>
      <div class="center">
        <p class="topone">互联网产业全球布局看板</p>
        <dv-decoration-5 style="width:600px;height:40px; margin: 40px 0 0 0;" />
      </div>
      <div class="right"><dv-decoration-8 :reverse="true" style="width:400px;height:50px;margin: 20px 0 0 80px;" /></div>
    </div>
    <!-- 下面 -->
    <div class="botm">
      <!-- 左边部分 -->
    <div class="leftone">
      <div class="lone">
        <p class="num">慕课外卖用户总数</p>
        <p class="user">User  Total Count</p>
        <p class="number">1,739,919</p>
        <p class="addmotus">每日增长率：73.90% &emsp;每月增长率：117.37%</p>
        <div class="tong"><p class="col"></p></div>
      </div>
      <div class="ltwo">
        <canvas id="main" style="width: 300px;"></canvas>
      </div>
      <div class="lthree"></div>
      <div class="lfour"></div>
      <div class="lfive"></div>
      <div class="lsix"></div>
    </div>
    <!-- 右边部分 -->
    <div class="rightone"></div>
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
    var myChart = echarts.init(document.getElementById('main'));

    var legendData = ['mysql', 'orcal', '123','321'];
    var _color = ['#f20', '#f60', '#ff0', '#fafb9d']
     var _datamax = [100]
    
var optiondata = [[10], [15], [20], [25]]

var _label = {
    normal: {
        show: true,
        position: [0, '24px'],
        formatter: function(v) {
          return (v.value / 100 * 100).toFixed(0) + '%'
        },
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }
}
var _data = []
optiondata.forEach((item, i) => {
    _data.push({
        type: 'bar',
        stack: '2',
        name: i,
        legendHoverLink: false,
        barWidth: 10,
        label: _label,
        itemStyle: {
            borderRadius: 10,
            normal: {
                color: _color[i]
            },
            emphasis: {
                color: _color[i]
            }
        },
        data: item
    })
    return _data
})

 var option = {
    backgroundColor: '#091034',
    legend: {
        show: false,
        data: legendData,
        textStyle: {
            color: '#ccc'
        }
    },
    grid: {
        containLabel: true,
        left: 0,
        right: 15,
        bottom: 30
    },
    xAxis: {
        splitNumber: 5,
        interval: 20,
        max: 100,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    },
    yAxis: [{
        show: false,
        data: [],
        axisLabel: {
            fontSize: 16,
            color: '#fff'

        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        show: false,
        data: [],
        axisLine: {
            show: false
        }
    }],
    series: _data
};

    myChart.setOption(option)

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
.hom{
  background-color: #1c1c1c;
  height: 100%;
  width: 100%;
}
.top{
  width: 100%;
  height: 80px;
  display: flex;
  // background-color: blueviolet;
}
.left{
  width: 500px;
  height: 80px;
  // background-color: aqua;
}
.center{
  width: 600px;
  height: 80px;
  position: relative;
  // background-color: orangered;
}
.topone{
  top: 15px;
  left: 150px;
  font-weight: 700;
  font-size: 26px;
  color: #fff;
  position: absolute;
}
.right{
  width: 500px;
  height: 80px;
  // background-color: pink;
}
.botm{
  width: 100%;
  height: 100vh;
  border-top: 5px solid #595758;
  background-color: #1c1c1c;
  display: flex;
}
.leftone{
  width: 24%;
  margin: 0 8px;
  
  background-color: aqua;
}
.lone{
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-color: #424345;
}
.num{
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: left;
  font-size: 16px;
  color: #fff;
  margin: 10px 0 5px 10px;
}
.user{
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: left;
  font-size: 12px;
  color: #fff;
  margin: 0 0 2px 10px;
}
.number{
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-weight: 700;
  font-size: 28px;
  color: #fff;
  margin: 0 0 5px 10px;
}
.addmotus{
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  color: #c5ea86;
  margin: 0 0 5px 10px;
}
.tong{
  width: 90%;
  height: 12px;
  border: 2px solid #ccc;
  position: relative;
  margin: 0 0 5px 10px;
}
.col{
  position: absolute;
  top: -1px;
  left: 0;
  width: 250px;
  height: 14px;
  background-color: #ccc;
}
.ltwo{
  width: 100%;
  height: 150px;
  background-color: orchid;
}
.rightone{
  width: 75%;
  background-color: orange;
}
</style>

