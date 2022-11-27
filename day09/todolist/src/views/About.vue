<template>
  <div>
    <div class="min">
        <!-- 方框 -->
        <div class="todo">
          <!-- 图片和文字 -->
          <div class="floorOne">
            <div class="left">
              <img src="../assets/note.75134fb0.svg" alt="" class="img">
            </div>
            <div class="right">
                <p class="font">To-Do List</p>
            </div>
          </div>
          <div class="floorTwo">
            ～ Today i nedd to ～
          </div>
          <div class="floorThree">
            <div class="inp"><input type="text" v-model="title" placeholder="Add new todo..." @keyup.enter="add"> </div>
            <div class="but"><button @click.13="add">submit</button></div>
          </div>
          <div class="floorFour" v-for="(item,index) in list" :key="item.id">
            <ul class="uu">
                <li v-show="item.status==0">
                    <input type="checkbox" name="" id="">
                    <div>{{item.name}}</div>
                    <p @click="delet(index)">×</p>
                </li>
                <!-- <li class="clo">
                    <input type="checkbox" name="" id="">
                    <div>555</div>
                    <p @click="delet(index)">×</p>
                </li> -->
            </ul>
            <ul class="uul">
              <li v-show="item.status==1">
                   <img src="../assets/对号.png" alt="">
                    <div>{{item.name}}</div>
                    <p @click="delet(index)">×</p>
                </li>
            </ul>
          </div>
          <div class="floorFive">
            <!-- 没有数据 -->
            <div class="congrat" v-if="this.list.length==0"><img src="../assets/任务.png" alt=""> Congrat,you have no more tasks to do</div>
            <!-- 只有未选中 -->
            <!-- <div class="nock" >
                <p class="left">{{shuzi}}item left</p>
                <p class="right">All</p>
            </div> -->
            <!-- 只有选中 -->
            <!-- <div class="nocked">
                <p class="lefted">item left</p>
                <p class="centered">All</p>
                <p class="righted">Clear completed</p>
            </div> -->
            <!-- 所有情况 -->
            <div class="chaned" v-else>
                <p>item left</p>
                <p>All</p>
                <p>Active</p>
                <p @click="checked">Completed</p>
                <p @click="del">Clear completed</p>
            </div>
          </div>
        </div>
      </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {name:'哈哈哈',
        status:0
        
        },
        {name:'嘻嘻',
        status:1
        },
        ],
      title:''
    }
  },
  methods: {
    // 添加数据
  add(){
   if(this.title !=""){
     this.list.push({name:this.title,status:0})
    // 清空input框
    this.title=""
   }
  },
  // 删除数据
  delet(index){
    this.list.splice(index,1)
  },
  // 清空数据
  del(){
    this.list=[""]
  },
  checked(){
    // this.list
  }
  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {
    shuzi(){
      return this.list.length
    }
  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
  /* 渐变背景 */
.min{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(to right, #ffb2b9,#ffc3a1)
}
/* // 方框样式 */
.todo{
  width: 360px;
  padding: 20px 20px;
  background-color: #f2f2f2;
  margin: 150px auto;
  
  border-radius: 10px;
}
/* 第一层 */
.floorOne{
  height: 100px;
  width: 360px;
  /* background-color: red; */
}
/* 左边图片 */
.left{
  width: 180px;
  height: 100px;
  float: left;
  /* background-color: plum; */
}
/* 图片 */
.img{
  width: 80px;
  height: 110px;
  margin: 0px 0px 0px 100px;
}
/* 右边文字 */
.right{
  width: 170px;
  float: left;
   transform: rotate(3deg);
  margin: 0 0 0 10px;
  /* background-color: green; */
}
.font{
    width: 120px;
    text-align: center;
    height: 45px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    line-height: 45px;
    margin: 45px  0 0 0;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 16px;
    font-family: SimHei;
    background-color: #fe7345;
}
/* 第二层 */
.floorTwo{
  height: 60px;
  width: 360px;
  line-height: 60px;
  text-align: center;
  font-weight: 700;
    font-size: 18px;
  font-family: SimHei;
  /* background-color: aqua; */
}
/* 第三层 */
.floorThree{
    width: 360px;
    height: 60px;
    /* background-color: #fe7345; */
}
.inp{
    width: 280px;
    height: 40px;
    float: left;
    /* background-color: #ffb2b9; */
    border-bottom: 2px dashed #fe7345;
    
    
}
.inp input{
    margin: 8px 0 0 0;
        width: 280px;
        height: 30px;
        outline: none;
        border: 0;
        background-color: #f2f2f2;
    }
.but{
    width: 80px;
    height: 40px;
    float: left;
    /* background-color: grey; */
}
.but button{
    width: 75px;
    height: 35px;
    margin: 0 0 0 5px;
     transform: rotate(3deg);
    border-radius: 8px;
    background-color: #fff;
    border-bottom: 2px dashed #fe7345;
    box-shadow:0 4px #000;
    font-size: 16px;
}
/* 第四层 */
.floorFour{
    width: 360px;
    /* height: 60px; */
    /* background-color: paleturquoise; */
}
.floorFour .uu li{
  margin: 5px 0;
    height: 50px;
    width: 360px;
    border-radius: 4px;
    /* background-color: #fe7345; */
}
.floorFour .uu li input{
    margin: 15px 5px;
    width: 20px;
    float: left;
    height: 20px;
    /* background-color: palegoldenrod; */
}
.floorFour .uu li div{
    /* color: #fff; */
    line-height: 50px;
    float: left;
    width: 290px;
    height: 50px;
    margin: 0 0 0 10px;
    /* background-color: #fe7345; */
}
.floorFour .uu li p{
    /* color: #fff; */
    float: left;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
    width: 30px;
    height: 50px;
    /* background-color: aqua; */
}


.floorFour .uul li{
  margin: 5px 0;
    height: 50px;
    width: 360px;
    border-radius: 4px;
     background-color: #fe7345; 
}
.floorFour .uul li img{
  color: #fff;
  display: block;
    margin: 15px 5px;
    width: 20px;
    float: left;
    height: 20px;
    /* background-color: palegoldenrod; */
}
.floorFour .uul li div{
    color: #fff;
    line-height: 50px;
    float: left;
    width: 290px;
    height: 50px;
    margin: 0 0 0 10px;
    /* background-color: #fe7345; */
}
.floorFour .uul li p{
    color: #fff;
    float: left;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
    width: 30px;
    height: 50px;
    /* background-color: aqua; */
}
/* 第五层 */
.floorFive{
    width: 360px;
    height: 40px;
    /* background-color: aqua; */
}
.congrat{
    width: 360px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #ccc;
}
.congrat img{
    width: 15px;
    height: 18px;
    margin: 5px 0 0 0 ;
}
.chaned{
    width: 3360px;
    height: 40px;
}
.chaned p{
    padding: 5px 6px;
    float: left;
    /* font-weight: 700; */
    font-size: 14px;
}
.nock{
    width: 360px;
    height: 40px;
}
.nock .left{
    width: 80px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    float: left;
    font-size: 14px;
}
.nock .left:hover{
  background-color: #fe7345;
  border-radius: 10px
}
.nock .right{
    text-align: center;
    width: 30px;
    height: 40px;
    line-height: 40px;
    float: right;
    font-size: 14px;
}
.nock .right:hover{
  background-color: #fe7345;
border-radius: 10px
}


.nocked{
    width: 360px;
    height: 40px;
}
.nocked .lefted{
    width: 100px;
    /* text-align: center; */
    height: 40px;
    line-height: 40px;
    float: left;
    font-size: 14px;
}
.nocked .lefted:hover{
  background-color: #fe7345;
border-radius: 10px
}
.nocked .centered{
    text-align: center;
    width: 80px;
    height: 40px;
    line-height: 40px;
    float: left;
    font-size: 14px;
}
.nocked .centered:hover{
   background-color: #fe7345;
border-radius: 10px
}
.nocked .righted{
    text-align: center;
    width: 150px;
    height: 40px;
    line-height: 40px;
    float: right;
    font-size: 14px;
}
.nocked .centered:hover{
  background-color: #fe7345;
border-radius: 10px
}
</style>

