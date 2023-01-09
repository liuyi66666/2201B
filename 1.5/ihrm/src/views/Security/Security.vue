<template>
    <div>
      <div class="social-box">
        <div class="social-box-top">
          <el-alert
            title="本月：社保在激 公积金在激 增员 减员 入职 离职"
            type="info"
            show-icon
            :closable="false"
            style="
              width: 350px;
              height: 40px;
              background: #e6f7ff;
              margin: 20px 0 0 20px;
              color: #000;
            "
          />
          <div
            style="
              display: flex;
              justify-content: space-between;
              margin: 20px 20px 0 0;
              width: 180px;
              font-size: 15px;
            "
          >
            <p>历史归档</p>
            <p>202001月报表</p>
          </div>
        </div>
        <div class="social-box-text">
          <el-form :model="form" label-width="120px">
            <el-form-item label="部门：  ">
              <el-checkbox-group
                v-for="(item, index) in form.type"
                :key="index"
                v-model="form.type"
              >
                <el-checkbox :label="item.name" :name="item.id" />
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="社保城市：  ">
              <el-checkbox-group
                v-for="(item, index) in form.type1"
                :key="index"
                v-model="form.type1"
              >
                <el-checkbox :label="item.name" :name="item.id" />
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="社保城市：  ">
              <el-checkbox-group
                v-for="(item, index) in form.type2"
                :key="index"
                v-model="form.type2"
              >
                <el-checkbox :label="item.name" :name="item.id" />
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </div>
  
      <div class="social-table">
        <el-table
          :data="tableList.tableList1"
          :default-sort="{ prop: 'date', order: 'descending' }"
          style="width: 95%; margin: 20px 0 20px 20px"
        >
          <el-table-column type="index" label="序号" width="80" />
          <el-table-column prop="username" label="姓名" width="100" sortable />
          <el-table-column prop="mobile" label="手机" width="140" sortable />
          <el-table-column prop="workNumber" label="工号" width="100" sortable />
          <el-table-column
            prop="departmentName"
            label="部门"
            width="100"
            sortable
          />
          <el-table-column
            prop="timeOfEntry"
            label="入职时间"
            width="150"
            sortable
          />
          <el-table-column prop="----" label="离职时间" width="120" sortable>
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span style="margin-left: 10px"> ----- </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="participatingInTheCity"
            label="社保城市"
            width="110"
          />
          <el-table-column
            prop="providentFundCity"
            label="公积金城市"
            width="110"
          />
          <el-table-column
            prop="socialSecurityBase"
            label="社保基数"
            width="110"
          />
          <el-table-column
            prop="providentFundBase"
            label="公积金基数"
            width="110"
          />
        </el-table>
  
        <!-- 分页 -->
        <div style="display: flex; justify-content: space-between">
          <p></p>
          <el-pagination
            :current-page="pagination.page"
            :page-size="pagination.pageSize"
            :page-sizes="[10, 20, 30, 50]"
            :small="false"
            :disabled="false"
            :background="false"
            layout=" sizes, prev, pager, next, jumper"
            :total="data.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            style="margin: 20px 20px 30px 0; float: right"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, toRefs } from 'vue'
  /**引入封装的社保接口 */
  import { frameworkGet, socialGet, socialPost } from '@/untils/httprequest'
  /**引入封装得状态码 */
  import { STATUS } from '@/untils/status'
  /**引入封装好的权限列表校验 */
  import * as TS from '../../untils/defind/approver'
  /**公共数据 */
  const data = reactive({
    total: 0
  })
  /**请求社保表格第一页请求10条数据 */
  const pagination = reactive<TS.page>({
    page: 1,
    pageSize: 10
  })
  /**表单内容 */
  const form = reactive({
    type: [],
    type1: [],
    type2: []
  })
  /**请求部门数据 */
  frameworkGet().then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      form.type = res.data.data.depts
    }
  })
  /**请求部门城市数据 */
  socialGet().then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      form.type1 = res.data.data
      form.type2 = res.data.data
    }
  })
  
  /**请求社保表格内容 */
  let tableList = reactive({
    tableList1: []
  })
  socialPost(pagination).then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      tableList.tableList1 = res.data.data.rows
      data.total = res.data.data.total
    }
  })
  
  /**分页 */
  const handleSizeChange = (val: number) => {
    pagination.pageSize = val
    socialPost(pagination).then((res) => {
      // console.log(res)
      if (res.status == STATUS.SUCCESS) {
        tableList.tableList1 = res.data.data.rows
        data.total = res.data.data.total
      }
    })
  }
  const handleCurrentChange = (val: number) => {
    pagination.page = val
    socialPost(pagination).then((res) => {
      // console.log(res)
      if (res.status == STATUS.SUCCESS) {
        tableList.tableList1 = res.data.data.rows
        data.total = res.data.data.total
      }
    })
  }
  </script>
  
  <style lang="scss" scoped>
  // 头部
  .social-box {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 0 0 15px;
    width: 1310px;
    height: 500px;
    .social-box-top {
      width: 1310px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
    }
    .social-box-text {
      margin-top: 35px;
      margin-left: 10px;
      width: 1300px;
      overflow: hidden;
    }
  }
  .social-table {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 0 0 15px;
    width: 1310px;
  }
  .el-checkbox{
      margin-left: 10px;
  }
  
  </style>
  