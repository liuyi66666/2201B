<template>
    <div class="departments-box">
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="组织结构" name="first">
          <div class="custom-tree-container1">
            <div
              style="
                display: flex;
                justify-content: space-between;
                border-bottom: 2px solid #cfcfcf;
                margin-bottom: 2px;
              "
            >
              <div>
                <p>{{ companyName }}</p>
              </div>
              <div style="display: flex; justify-content: space-between">
                <p style="margin-right: 20px">负责人</p>
                <p>
                  操作 <el-icon color="#ccc"><ArrowDownBold /></el-icon>
                </p>
              </div>
            </div>
  
            <el-tree
              :data="depts.depList"
              node-key="id"
              default-expand-all
              :props="defaultProps"
              :expand-on-click-node="false"
            >
              <template #default="{ node, data }">
                <span class="custom-tree-node">
                  <span>{{ node.label }}</span>
                  <span>
                    <a> {{ data.manager }} </a>
                    <a style="margin-left: 8px">
                      操作 <el-icon color="#ccc"><ArrowDownBold /></el-icon>
                    </a>
                  </span>
                </span>
              </template>
            </el-tree>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, toRefs } from 'vue'
  /**引入封装得状态码 */
  import { STATUS } from '@/untils/status'
  /**引入封装的组织架构接口 */
  import { frameworkGet } from '@/untils/httprequest'
  /**引入element-plus图标库 */
  import { ArrowDownBold } from '@element-plus/icons-vue'
  import type Node from 'element-plus/es/components/tree/src/model/node'
  /**获取组织架构数据 */
  const activeName = ref('first')
  let companyName = ref()
  let depts = reactive({
    depList: []
  })
  let defaultProps = reactive({
    children: '',
    label: 'name'
  }) //分配权限设置
  frameworkGet().then((res) => {
    // console.log(res)
    if (res.status == STATUS.SUCCESS) {
      companyName = res.data.data.companyName
      depts.depList = res.data.data.depts
      // console.log(depts);
    }
  })
  
  interface Tree {
    id: number
    label: string
    children?: Tree[]
  }
  let id = 1000
  
  const dataSource = ref<Tree[]>([
    {
      id: 1,
      label: 'Level one 1',
      children: [
        {
          id: 4,
          label: 'Level two 1-1',
          children: [
            {
              id: 9,
              label: 'Level three 1-1-1'
            },
            {
              id: 10,
              label: 'Level three 1-1-2'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: 'Level one 2',
      children: [
        {
          id: 5,
          label: 'Level two 2-1'
        },
        {
          id: 6,
          label: 'Level two 2-2'
        }
      ]
    },
    {
      id: 3,
      label: 'Level one 3',
      children: [
        {
          id: 7,
          label: 'Level two 3-1'
        },
        {
          id: 8,
          label: 'Level two 3-2'
        }
      ]
    }
  ])
  </script>
  
  <style lang="scss" scoped>
  // 全局
  .departments-box {
    border: 1px solid #ebeef5;
    background-color: #fff;
    border-radius: 5px;
    margin: 10px 0 0 10px;
    width: 1310px;
    // height: 850px;
    .demo-tabs {
      margin: 30px 0 50px 50px;
    }
    .custom-tree-container1 {
      width: 1000px;
      // height: 300px;
      margin-left: 120px;
      margin-top: 36px;
    }
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
    }
  }
  </style>
  
  