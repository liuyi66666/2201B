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
        <p class="num">慕课外卖用户年龄分布&平均年龄</p>
        <canvas id="main" style="width: 350px; height: 110px;"></canvas>
      </div>
      <div class="lthree">
        <canvas id="shanxing"></canvas>
        <div class="zi">
          <p class="num">慕课外卖登录设备</p>
          <p class="user">User  Total Count</p>
          <p class="coll"><span>552,041</span> <span>471,645</span> <span>371,947</span></p>
        </div>
        
      </div>
      <div class="lfour">
        <div class="menu">
        <p class="num">男性用户人数</p>
        <p class="user">User  Total Count</p>
        <p class="number">869,913</p>

        </div>
        <div class="worn">
          <p class="num">女性用户人数</p>
        <p class="user">User  Total Count</p>
        <p class="number">870,006</p>
        </div>
      </div>
      <div class="lfive"></div>
      <div class="lsix"></div>
    </div>
    <!-- 右边部分 -->
    <div class="rightone">
      <div class="toop">
        <div class="day">
          <div class="img"><img src="@/assets/钱.png" alt=""></div>
          <div class="toped">
            <p class="daygood">今日销售额</p>
            <p class="english">Todays  Amounal</p>
            <p class="numm">56,998,472</p>
          </div>
        </div>
        <div class="day">
          <div class="img"><img src="@/assets/订单.png" alt=""></div>
          <div class="toped">
            <p class="daygood">今日订单量</p>
            <p class="english">Todays  Amounal</p>
            <p class="numm">3,496,490</p>
          </div>
        </div>
        <div class="day">
          <div class="img"><img src="@/assets/116皇冠.png" alt="" /></div>
          <div class="toped">
            <p class="daygood">今日交易用户数</p>
            <p class="english">Todays  Amounal</p>
            <p class="numm">758,349</p>
          </div>
        </div>
        <div class="day">
          <div class="img"><img src="@/assets/用户登录.png" alt="" /></div>
          <div class="toped">
            <p class="daygood">今日新增用户数</p>
            <p class="english">Todays  Amounal</p>
            <p class="numm">1,739919</p>
          </div>
        </div>
        <div class="dayed">
         <div class="jia">
          <div class="j"><i class="el-icon-check"></i></div>
          <div>
            <p class="english">转化率</p>
            <p class="daygood">13.00%</p>
          </div>
         </div>
         <div class="jian">
          <div class="a"><i class="el-icon-minus"></i></div>
          <div>
            <p class="english">退单率</p>
            <p class="daygood">5.66%</p>
          </div>
         </div>
        </div>
      </div>
      <!-- All地址 -->
      <div class="address">
        <div>ALL</div>
        <div>北京</div>
        <div>上海</div>
        <div>深圳</div>
        <div>杭州</div>
        <div>南京</div>
        <div>武汉</div>
      </div>
      <!-- all下面的部分 -->
      <div class="botmed">
        <div class="dt">
          <div class="chin">
            <chinadt></chinadt>
          </div>
        </div>
        <div class="qu"></div>
      </div>
    </div>
    </div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
import chinadt from "@/components/chinadt.vue"
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
    /**扇形统计图**/ 
    var myChart = echarts.init(document.getElementById('shanxing'));

   var option = {
      backgroundColor:'#03213E',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
        },
        legend: {
          right: '5%',
          top: '40%',
          orient: 'vertical',
          itemGap: 20,
          itemWidth: 15,
          itemHeight: 15,
          textStyle: {
            color: '#fff',
            fontSize:14,
          },
          formatter: function (name) {
            let than = option.series[0].data //获取series中的data
            let total = 0
            let tarValue
            for (let i = 0, l = than.length; i < l; i++) {
              total += than[i].value
              if (than[i].name == name) {
                tarValue = than[i].value
              }
            }
            let p = (tarValue / total) * 100
            return ' ' + ' '+' '+name + ' ' + ' ' + ' ' + ' ' + ' '+tarValue + '次' + ' ' + ' ' + ' ' + p.toFixed(2) + '%'
          },
        },
        series: [
          {
            type: 'pie',
            radius: '80%',
            center: ['30%', '60%'],

            color: ['#89a455', '#a2c068', '#b4cc80'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [
              {
                value: 60,
              },
              {
                value: 50,
              },
              {
                value: 50,
              },
            ].sort(function (a, b) {
              return a.value - b.value
            }),
            roseType: 'area',
            label: {
              show: false,
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,
              },
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0,0,0,0.45); ',
                shadowBlur: 50,
              },
            },
          },
        ],
      }
      myChart.setOption(option)

  },
  components: {
    chinadt
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
  overflow: hidden;
  // background-color: aqua;
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
  // background-color: orchid;
}
.lthree{
  width: 100%;
  height: 150px;
  display: flex;
  // background-color: #c5ea86;
}
#shanxing{
  width: 40%;
  height: 150px;
  // background-color: #1c1c1c;
}
.zi{
  width: 60%;
  height: 150px;
  // background-color: pink;
}
.coll{
  margin: 30px 0 0 -10px;
  color: #fff;
}
.lfour{
  width: 100%;
  height: 120px;
  display: flex;
  // background-color: green;
}
.menu{
  width: 50%;
  height: 120px;
}
.worn{
  width: 50%;
  height: 120px;
}
.rightone{
  width: 75%;
  // background-color: orange;
}
.toop{
  width: 100%;
  height: 100px;
  display: flex;
  // background-color: #c5ea86;
}
.day{
  width: 22%;
  height: 100px;
  display: flex;
  color: #fff;
  // background-color: pink;
}
.dayed{
  width: 15%;
  height: 100px;
  display: flex;
  // background-color: #88a555;
}
.jia{
  width: 50%;
  height: 100px;
  color: #fff;
}
.jian{
  width: 50%;
  height: 100px;
  color: #fff;
}
.day .img{
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 50%;
  background-color: #88a555;
}
.day .img img{
  width: 50px;
  height: 50px;
  margin: 15px 10px 10px 10px;
}
.daygood{
  height: 20px;
  font-size: 16px;
  text-align: left;
  line-height: 20px;
  margin: 5px;
}
.english{
  height: 20px;
  font-size: 8px;
  text-align: left;
  line-height: 20px;
  margin: 5px;
}
.numm{
  height: 30px;
  font-size: 26px;
  font-weight: 700;
  text-align: left;
  line-height: 30px;
  margin: 5px
}
.day .toped{
  width: 150px;
  height: 90px;
  margin: 5px;
  // background-color: orangered;
}
.j{
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 24px;
  color: #454745;
  font-weight: 700;
  border-radius: 50%;
  margin: 5px 0 0 8px;
  background-color: #c5ea86;

}
.a{
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 24px;
  font-weight: 700;
  color: #454745;
  border-radius: 50%;
  margin: 5px 0 0 8px;
  background-color: #c5ea86;

}
.address{
  width: 100%;
  height: 20px;
  margin: 10px 0;
  display: flex;
  background-color: #35383f;
}
.address div{
  flex: 1;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  text-align: center;
}
.botmed{
  width: 100%;
  height: 100%;
  display: flex;
  // background-color: plum;
}
.dt{
  width: 70%;
  background-color: blue;
}
.chin{
  width: 100%;
  height: 450px;
  background-color: pink;
}
.qu{
  width: 30%;
  background-color: yellow;
}
</style>

