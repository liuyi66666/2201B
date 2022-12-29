
<template>
    <div class="home">
      <div class="body_bg">
        <div class="body_content">
          <!-- 顶部标签 -->
          <div>
            <h1>H2201点名表 </h1>
            <p class="currentTime">时间:</p>
          </div>
  
          <!-- 展示名字 -->
          <div class="content">
            <!-- 左边同学渲染 -->
            <div>
              <ul>
                <li v-for="item in list" :key="item.id">{{ item.name }}</li>
              </ul>
            </div>
            <!-- <header>
              <ul>
              </ul>
            </header> -->
            <!-- 选中人的名字 -->
            <div class="right">
              <div class="content_div">
                <span style="color: aqua;font-size: 40px;">选中之人:</span>
                <span id="name" class="nameStyle"></span>
              </div>
              <footer>
                <button onclick="oneStudent(event)" id="one">单人点名</button>
                <button onclick="downStudent(event)" id="two">双人点名</button>
                <button onclick="bodyOrGrilStudent(0,event)" id="three">男生点名</button>
                <button onclick="bodyOrGrilStudent(1,event)" id="four">女生点名</button>
              </footer>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { ref, reactive, toRefs } from 'vue';

export default {
setup(props, ctx) {
const data = reactive({
    list:[{
        name:'李妍',
    },{
        name:'张世权',
    },{
        name:'张宗耀',
    },{
        name:'郑峰',
    },{
        name:'高鹏亚',
    },{
        name:'江梦洋',
    },{
        name:'章涵语',
    },{
        name:'刘艺',
    },{
        name:'付高聪',
    },{
        name:'徐婉莹',
    },{
        name:'韩宇泽',
    },{
        name:'宋增杰',
    },{
        name:'宋海宇',
    },{
        name:'孙铭',
    },{
        name:'代伊涵',
    },{
        name:'薛翔元',
    },{
        name:'侯建荞',
    },{
        name:'郝曼曼',
    },{
        name:'孙旭瑶',
    },{
        name:'吴倩',
    },{
        name:'周旋',
    },{
        name:'王龙翔',
    },{
        name:'李宏恩',
    },{
        name:'张建雨',
    },{
        name:'程怀博',
    },{
        name:'邓林科',
    },{
        name:'张奥博',
    },{
        name:'杨志豪',
    },{
        name:'王伟宸',
    },{
        name:'张立',
    },{
        name:'巴钦',
    },]
});
return { ...toRefs(data) };
},
};
</script>

  <style>
     .home{
         
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         font-size: 20px;
         font-family: cursive;
         display: flex;
         justify-content: center;
         /* background-image: url('./img/xxxx.gif');  */
        
     }
     
     
      
     
      
     
     * {
         box-sizing: border-box;
     }
     header {
         width: 900px;
         /* background-color: antiquewhite; */
     }
     ul li {
         list-style: none;
     }
     ul {
         padding: 20px;
         display: flex;
         justify-content: flex-start;
         flex-wrap: wrap
     }
     li{
         font-size: 26px;
         text-align: center;
         width: 80px;
         margin: 26px;
         padding-bottom: 5px;
         border-radius: 16px;
         -webkit-border-radius: 16px;
         -moz-border-radius: 16px;
         -ms-border-radius: 16px;
         -o-border-radius: 16px;
     }
     
     footer {
         width: 400px;
         display: flex;
         justify-content: space-between;  
         margin-top: -100px; 
     }
     
     button {
         display: inline-block;
         line-height: 1;
         white-space: nowrap;
         cursor: pointer;
         background: #fff;
         border: 1px solid #dcdfe6;
         color: #606266;
         -webkit-appearance: none;
         text-align: center;
         box-sizing: border-box;
         outline: none;
         margin: 0;
         transition: .1s;
         font-weight: 500;
         -moz-user-select: none;
         -webkit-user-select: none;
         -ms-user-select: none;
         padding: 12px 20px;
         font-size: 14px;
         color: #fff;
         background-color: aqua;
         border-color: aqua;
         border-radius: 20px;
         -webkit-border-radius: 20px;
         -moz-border-radius: 20px;
         -ms-border-radius: 20px;
         -o-border-radius: 20px;
         margin-right: 20px;
     }
     
     h1{
         color: #606266;
         text-align: center;
         line-height: 200px;
     }
     .content_div {
         width: 600px;
         height: 300px;
         line-height: 300px;
         text-align: left;
         font-size: 30px !important;
         color: #fff;
         margin-bottom: 200px;
     }
     .content{
         display: flex;
         justify-content: space-between;
     }
     .right{
         display: flex;
         flex-direction: column;
         margin-left: 100px;
     }
     
     .liColor {
         background-clip: text;
         -webkit-background-clip: text;
         color: transparent;
         font-size: 26px;
     }
     
     .nameStyle {
         background-clip: text;
         -webkit-background-clip: text;
         color: transparent;
         font-size: 60px;
         font-weight: bold;
     }
     .currentTime{
         color: #fff;
         text-align: right;
         font-size: 20px;
     }
  </style>
  