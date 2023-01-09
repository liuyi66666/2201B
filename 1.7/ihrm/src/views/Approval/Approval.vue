<template>
    <div>
      <div class="approvals-box">
        <el-alert
          title="当前审批中 0 本月审批通过 1 本月审批驳回 0"
          type="info"
          show-icon
          :closable="false"
          style="
            width: 340px;
            height: 40px;
            background: #e6f7ff;
            margin: 5px 0 0 20px;
            color: #000;
          "
        />
        <el-button type="primary" style="margin-right: 20px">流程设置</el-button>
      </div>
  
      <div class="approvals-table">
        <el-table
          :data="approvalsList.approvalsList1"
          :default-sort="{ prop: 'date', order: 'descending' }"
          style="width: 95%; margin: 20px 0 20px 20px"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column type="index" label="序号" width="80" />
          <el-table-column prop="processName" label="审批类型" sortable />
          <el-table-column prop="username" label="申请人" sortable />
          <el-table-column
            prop="procCurrNodeUserName"
            label="当前审批人"
            sortable
          />
          <el-table-column prop="address" label="审批发起时间" sortable>
            <template #default="scope">
              {{ new Date(scope.row.procApplyTime).toLocaleString() }}
            </template>
          </el-table-column>
          <el-table-column prop="address" label="审批状态" sortable>
            <template #default="scope">
              <span
                style="
                  background-color: #00a854;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  display: inline-block;
                "
                v-if="scope.row.processState == 2"
              ></span>
              <span
                style="
                  background-color: #8a771f;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  display: inline-block;
                "
                v-if="scope.row.processState == 1"
              ></span>
              <span
                style="
                  background-color: #f04134;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  display: inline-block;
                "
                v-if="scope.row.processState == 3"
              ></span>
              <span
                style="
                  background-color: #bfbfbf;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  display: inline-block;
                "
                v-if="scope.row.processState == 4"
              ></span>
              {{ scope.row.processState == 2 ? '审批通过' : '' }}
              {{ scope.row.processState == 4 ? '撤销' : '' }}
              {{ scope.row.processState == 1 ? '审批中' : '' }}
              {{ scope.row.processState == 3 ? '审批不通过' : '' }}
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template #default="scope">
              <el-button link type="primary" size="small">查看</el-button>
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
            style="margin: 20px 20px 30px 0; float: right"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, toRefs } from 'vue'
  /**引入封装的权限接口 */
  import { approverPut } from '@/untils/httprequest'
  /**引入封装得状态码 */
  import { STATUS } from '@/untils/status'
  /**引入封装好的权限列表校验 */
  import * as TS from '../../untils/defind/approver'
  /**公共数据 */
  const data = reactive({
    total: 0
  })
  /**请求审批表格第一页请求10条数据 */
  const pagination = reactive<TS.page>({
    page: 1,
    pageSize: 10
  })
  let currentPage = ref<number>(1)
  // 当前第几页
  let pageSize = ref<number>(10)
  // 当前页数
  /**请求审批表格内容 */
  let approvalsList = reactive({
    approvalsList1: []
  })
  approverPut({ page: currentPage.value, pageSize: pageSize.value }).then(
    (res) => {
      console.log(res)
      if (res.status == STATUS.SUCCESS) {
        approvalsList.approvalsList1 = res.data.data.rows
      }
    }
  )
  
  /**分页 */
  const handleSizeChange = (val: number) => {
    pagination.pageSize = val
    
  }
  const handleCurrentChange = (val: number) => {
    pagination.page = val
    // socialPost(pagination).then((res) => {
    //   // console.log(res)
    //   if (res.status == STATUS.SUCCESS) {
    //     tableList.tableList1 = res.data.data.rows
    //     data.total = res.data.data.total
    //   }
    // })
  }
  </script>
  
  <style lang="scss" scoped>
  // 头部
  .approvals-box {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 0 0 15px;
    width: 1310px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .approvals-table {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 0 0 15px;
    width: 1310px;
  }
  </style>
  