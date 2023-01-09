<template>
    <div>
      <!-- 头部 -->
      <div class="dashboard-box">
        <img
          src="@/assets/头像1.png"
          alt=""
          style="width: 130px; height: 130px; margin: 5px 0 0 20px"
        />
        <div>
          <p style="font-size: 25px">早安,管理员，祝你开心每一天!</p>
          <p style="font-size: 20px; color: #948c8d; margin-top: 10px">
            管理员 | 传智播客-总裁办
          </p>
        </div>
      </div>
      <div style="display: flex">
        <div>
          <!-- 工作日历 -->
          <div class="dashboard-calendar">
            <p class="dashboard-calendar-title">工作日历</p>
            <div class="dashboard-calendar-select">
              <el-select
                v-model="value"
                class="m-2"
                placeholder="2001"
                style="width: 100px; height: 20px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-select
                v-model="value"
                class="m-2"
                placeholder="1"
                style="width: 100px; height: 20px; margin-left: 5px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="dashboard-calendar-calendar">
              <div class="dashboard-calendar-calendar-1">
                <span>一</span>
                <span>二</span>
                <span>三</span>
                <span>四</span>
                <span>五</span>
                <span style="color: #ff5f42">六</span>
                <span style="color: #ff5f42">日</span>
              </div>
              <div class="dashboard-calendar-calendar-2">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
  
                <span
                  >6<span class="dashboard-calendar-calendar-xiu">休</span></span
                >
  
                <span
                  >7<span class="dashboard-calendar-calendar-xiu1">休</span></span
                >
              </div>
              <div class="dashboard-calendar-calendar-2">
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
  
                <span
                  >13<span class="dashboard-calendar-calendar-xiu">休</span></span
                >
  
                <span
                  >14<span class="dashboard-calendar-calendar-xiu1"
                    >休</span
                  ></span
                >
              </div>
              <div class="dashboard-calendar-calendar-2">
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
  
                <span
                  >20<span class="dashboard-calendar-calendar-xiu">休</span></span
                >
  
                <span
                  >21<span class="dashboard-calendar-calendar-xiu1"
                    >休</span
                  ></span
                >
              </div>
              <div class="dashboard-calendar-calendar-2">
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
  
                <span
                  >27<span class="dashboard-calendar-calendar-xiu">休</span></span
                >
  
                <span
                  >28<span class="dashboard-calendar-calendar-xiu1"
                    >休</span
                  ></span
                >
              </div>
              <div class="dashboard-calendar-calendar-2">
                <span>29</span>
                <span>30</span>
                <span>31</span>
                <span style="color: #ccc">1</span>
                <span style="color: #ccc">2</span>
  
                <span style="color: #ccc">3</span>
  
                <span style="color: #ccc">4</span>
              </div>
            </div>
          </div>
          <!-- 公告 -->
          <div class="dashboard-Notice">
            <p class="dashboard-Notice-title">公告</p>
            <div class="dashboard-Notice-text">
              <img
                src="@/assets/苹果.png"
                alt=""
                style="width: 60px; height: 60px; margin: 10px 0 0 5px"
              />
              <div style="margin-left: 20px">
                <p>
                  <span style="color: #a8b3f8">朱继柳</span>发布了
                  第1期“传智大讲堂”互动讨论获奖名单公布
                </p>
                <p style="margin-top: 5px">2018-07-21 15:21:38</p>
              </div>
            </div>
            <div class="dashboard-Notice-text">
              <img
                src="@/assets/苹果.png"
                alt=""
                style="width: 60px; height: 60px; margin: 10px 0 0 5px"
              />
              <div style="margin-left: 20px">
                <p>
                  <span style="color: #a8b3f8">朱继柳</span>发布了
                  第2期“传智大讲堂”互动讨论获奖名单公布
                </p>
                <p style="margin-top: 5px">2018-07-21 15:21:38</p>
              </div>
            </div>
            <div class="dashboard-Notice-text">
              <img
                src="@/assets/苹果.png"
                alt=""
                style="width: 60px; height: 60px; margin: 10px 0 0 5px"
              />
              <div style="margin-left: 20px">
                <p>
                  <span style="color: #a8b3f8">朱继柳</span>发布了
                  第3期“传智大讲堂”互动讨论获奖名单公布
                </p>
                <p style="margin-top: 5px">2018-07-21 15:21:38</p>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <!-- 流程申请 -->
          <div class="dashboard-apply">
            <p class="dashboard-apply-title">流程申请</p>
            <div class="dashboard-apply-text">
              <el-button plain style="width: 150px; height: 45px"
                >加班离职</el-button
              >
              <el-button plain style="width: 150px; height: 45px"
                >请假调休</el-button
              >
              <el-button plain style="width: 150px; height: 45px"
                >审批列表</el-button
              >
              <el-button
                plain
                style="width: 150px; height: 45px; margin: 15px 0 0 0"
                >我的信息</el-button
              >
            </div>
          </div>
          <!-- 便捷导航 -->
          <div class="dashboard-navigation">
            <p class="dashboard-navigation-title">快速开始/便捷导航</p>
            <div class="dashboard-navigation-text">
              <el-button plain style="width: 150px; height: 45px"
                >人事月报</el-button
              >
              <el-button plain style="width: 150px; height: 45px"
                >考勤查询</el-button
              >
              <el-button plain style="width: 150px; height: 45px"
                >考勤统计</el-button
              >
              <el-button
                plain
                style="width: 150px; height: 45px; margin: 15px 0 0 0"
                >员工审核</el-button
              >
              <el-button
                plain
                style="width: 150px; height: 45px; margin: 15px 0 0 12px"
                >组织架构</el-button
              >
            </div>
          </div>
          <!-- 链接 -->
          <div class="dashboard-link">
            <p class="dashboard-link-title">帮助链接</p>
            <div class="dashboard-link-text">
              <div>
                <img
                  src="@/assets/入门指南.png"
                  alt=""
                  style="width: 70px; height: 70px"
                />
                <p style="font-size: 14px; margin-left: 10px">入门指南</p>
              </div>
              <div>
                <img
                  src="@/assets/帮助手册.png"
                  alt=""
                  style="width: 70px; height: 70px"
                />
                <p style="font-size: 14px">在线帮助手册</p>
              </div>
              <div>
                <img
                  src="@/assets/联系电话.png"
                  alt=""
                  style="width: 70px; height: 70px"
                />
                <p style="font-size: 14px">联系电话支持</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, toRefs } from 'vue'
  
  const value = ref('')
  
  const options = [
    {
      value: 'Option1',
      label: 'Option1'
    },
    {
      value: 'Option2',
      label: 'Option2'
    },
    {
      value: 'Option3',
      label: 'Option3'
    },
    {
      value: 'Option4',
      label: 'Option4'
    },
    {
      value: 'Option5',
      label: 'Option5'
    }
  ]
  </script>
  
  <style lang="scss" scoped>
  /**头部 */
  .dashboard-box {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 10px 0 0 10px;
    width: 1310px;
    height: 150px;
    display: flex;
    align-items: center;
  }
  // <!-- 工作日历 -->
  .dashboard-calendar {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 20px 0 0 10px;
    width: 750px;
    height: 400px;
    .dashboard-calendar-title {
      // width: 215px;
      height: 45px;
      font-size: 25px;
      border-bottom: 2px solid #ebeef5;
      margin: 20px 0 0 30px;
    }
    .dashboard-calendar-select {
      margin: 25px 0px 0 500px;
    }
    .dashboard-calendar-calendar {
      width: 650px;
      height: 235px;
      margin: 20px 0 0 50px;
      .dashboard-calendar-calendar-1 {
        width: 650px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .dashboard-calendar-calendar-2 {
        width: 650px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        position: relative;
        .dashboard-calendar-calendar-xiu {
          display: inline-block;
          width: 20px;
          height: 22px;
          background: #fa7c4d;
          border-radius: 50%;
          font-size: 13px;
          text-align: center;
          line-height: 22px;
          color: #fff;
          position: absolute;
          left: 550px;
          top: 5px;
        }
        .dashboard-calendar-calendar-xiu1 {
          display: inline-block;
          width: 20px;
          height: 22px;
          background: #fa7c4d;
          border-radius: 50%;
          font-size: 13px;
          text-align: center;
          line-height: 22px;
          color: #fff;
          position: absolute;
          left: 660px;
          top: 5px;
        }
      }
    }
  }
  /**公告 */
  .dashboard-Notice {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 20px 0 0 10px;
    width: 750px;
    height: 450px;
    .dashboard-Notice-title {
      height: 45px;
      font-size: 16px;
      border-bottom: 2px solid #ebeef5;
      margin: 20px 0 0 30px;
    }
    .dashboard-Notice-text {
      width: 600px;
      height: 130px;
      border-bottom: 2px solid #ebeef5;
      margin: -15px 0 0 70px;
      display: flex;
      align-items: center;
    }
  }
  /**流程申请 */
  .dashboard-apply {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 20px 0 0 10px;
    width: 550px;
    height: 230px;
    .dashboard-apply-title {
      width: 100px;
      height: 40px;
      font-size: 25px;
      border-bottom: 5px solid #8a97f8;
      margin: 20px 0 0 30px;
    }
    .dashboard-apply-text {
      margin: 15px 0px 0px 31px;
    }
  }
  /**便捷导航 */
  .dashboard-navigation {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 20px 0 0 10px;
    width: 550px;
    height: 230px;
    .dashboard-navigation-title {
      width: 215px;
      height: 40px;
      font-size: 25px;
      border-bottom: 5px solid #8a97f8;
      margin: 20px 0 0 30px;
    }
    .dashboard-navigation-text {
      margin: 15px 0px 0px 31px;
    }
  }
  /**链接 */
  .dashboard-link {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 20px 0 0 10px;
    width: 550px;
    height: 200px;
    .dashboard-link-title {
      width: 100px;
      height: 40px;
      font-size: 25px;
      border-bottom: 5px solid #8a97f8;
      margin: 20px 0 0 30px;
    }
    .dashboard-link-text {
      width: 420px;
      height: 80px;
      display: flex;
      margin: 20px 0 0 55px;
      align-items: center;
      justify-content: space-between;
    }
  }
  </style>
  