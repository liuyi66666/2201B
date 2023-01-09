<template>
    <div>
      <div class="salarys-box">
        <div class="salarys-box-top">
          <el-alert
            title="本月：入职 离职 调薪 未定薪"
            type="info"
            show-icon
            :closable="false"
            style="
              width: 250px;
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
            <p>设置</p>
            <p>202003月报表</p>
          </div>
        </div>
        <div class="salarys-box-text">
          <el-form :model="form" label-width="120px">
            <el-form-item label="聘用形式：  ">
              <el-checkbox-group v-model="form.type1">
                <el-checkbox label="正式" name="正式" />
                <el-checkbox label="非正式" name="非正式" />
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="员工状态：  ">
              <el-checkbox-group v-model="form.type2">
                <el-checkbox label="在职" name="在职" />
                <el-checkbox label="离职" name="离职" />
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="部门：  ">
              <el-checkbox-group
                v-for="(item, index) in form.type"
                :key="index"
                v-model="form.type"
              >
                <el-checkbox :label="item.name" :name="item.id" />
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </div>
  
      <div class="salarys-table">
        <el-table
          :data="salaryList.salaryList"
          :default-sort="{ prop: 'date', order: 'descending' }"
          style="width: 95%; margin: 20px 0 20px 20px"
        >
          <el-table-column type="index" label="序号" width="80" />
          <el-table-column prop="username" label="姓名" width="120" />
          <el-table-column prop="mobile" label="手机" width="160" />
          <el-table-column prop="workNumber" label="工号" width="100" />
          <el-table-column prop="inServiceStatus" label="聘用形式" width="100">
            <template #default="scope">
              {{ scope.row.inServiceStatus == 1 ? '正式' : '' }}
            </template>
          </el-table-column>
          <el-table-column prop="departmentName" label="部门" width="100" />
          <el-table-column prop="timeOfEntry" label="入职时间" width="180">
            <template #default="scope">
              {{ scope.row.timeOfEntry.slice(0, 10) }}
            </template>
          </el-table-column>
          <el-table-column prop="currentPostWage" label="工资基金" width="120">
            <template #default="scope">
              {{ scope.row.currentPostWage * 2 }}
            </template>
          </el-table-column>
          <el-table-column prop="currentPostWage" label="津贴方案" width="120">
            通用方案
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button
                size="small"
                type="danger"
                v-if="scope.row.currentPostWage == null"
                >定薪</el-button
              >
              <el-button
                size="small"
                type="primary"
                v-if="scope.row.currentPostWage > 0"
                >调薪</el-button
              >
              <el-button size="small">查看</el-button>
            </template>
          </el-table-column>
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
            style="margin: 10px 20px 30px 0; float: right"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, toRefs } from 'vue'
  /**引入封装的工资接口 */
  import { frameworkGet, salaryPost } from '@/untils/httprequest'
  /**引入封装得状态码 */
  import { STATUS } from '@/untils/status'
  
  /**公共数据 */
  const data = reactive({
    total: 0
  })
  /**请求工资表格第一页请求10条数据 */
  const pagination = reactive({
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
  /**请求工资表格内容 */
  const salaryList = reactive({
    salaryList: []
  })
  salaryPost(pagination).then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      salaryList.salaryList = res.data.data.rows
      data.total = res.data.data.total
    }
  })
  
  /**分页 */
  const handleSizeChange = (val: number) => {
    pagination.pageSize = val
    salaryPost(pagination).then((res) => {
      // console.log(res)
      if (res.status == STATUS.SUCCESS) {
        salaryList.salaryList = res.data.data.rows
        data.total = res.data.data.total
      }
    })
  }
  const handleCurrentChange = (val: number) => {
    pagination.page = val
    salaryPost(pagination).then((res) => {
      // console.log(res)
      if (res.status == STATUS.SUCCESS) {
        salaryList.salaryList = res.data.data.rows
        data.total = res.data.data.total
      }
    })
  }
  </script>
  
  <style lang="scss" scoped>
  // 头部
  .salarys-box {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 0 0 15px;
    width: 1310px;
    height: 500px;
    .salarys-box-top {
      width: 1310px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
    }
    .salarys-box-text {
      margin-top: 30px;
      margin-left: 10px;
      width: 1300px;
    }
  }
  .salarys-table {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 0 0 15px;
    width: 1310px;
  }
  .el-checkbox {
    margin-left: 10px;
  }
  </style>
  