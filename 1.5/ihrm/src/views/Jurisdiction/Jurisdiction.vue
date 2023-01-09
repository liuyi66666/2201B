<template>
  <div>
    <div class="permissions-box">
      <el-button
        type="primary"
        :icon="Edit"
        style="margin: 20px 0 0 1180px"
        @click="dialogVisible = true"
        >添加菜单</el-button
      >
      <!-- 表格 -->

      <el-table
        :data="data.data1"
        style="width: 90%; margin-left: 20px; margin-bottom: 20px"
      >
        <el-table-column prop="name" label="菜单名称" width="230">
          <template #default="scope">
            <el-icon><FolderOpened /></el-icon>
						{{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column prop="code" label="权限标识" width="230" />
        <el-table-column prop="description" label="描述" width="300" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="primary" size="small" link>添加权限点</el-button>
            <el-button type="primary" size="small" link>查看api权限</el-button>
            <el-button type="primary" size="small" link>查看</el-button>
            <el-button type="primary" size="small" link>删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 添加菜单对话框 -->
      <el-dialog v-model="dialogVisible" title="添加权限" width="50%">
        <el-form :model="form" label-width="120px">
          <el-form-item label="权限名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="权限标识">
            <el-input v-model="form.ids" />
          </el-form-item>
          <el-form-item label="权限描述">
            <el-input v-model="form.text" />
          </el-form-item>

          <el-form-item label="企业可见">
            <el-switch
              v-model="form.flag"
              class="mb-2"
              active-text="不可见"
              inactive-text="可见"
            />
          </el-form-item>
          <el-form-item label="按钮样式">
            <el-input v-model="form.type" />
          </el-form-item>
          <el-form-item label="按钮icon">
            <el-input v-model="form.icon" />
          </el-form-item>
          <el-form-item label="按钮状态">
            <el-input v-model="form.status" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="qd"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted } from 'vue'
import { Edit, FolderOpened } from '@element-plus/icons-vue'
/**引入封装的权限接口 */
import { purviewGet, purviewAddPost } from '@/untils/httprequest'
/**引入封装得状态码 */
import { STATUS } from '@/untils/status'
/**引入封装好的权限列表校验 */
import * as TS from '../../untils/defind/authority'

/**获取请求内容 */
const data = reactive({
  data1: TS.data1
})
purviewGet({ type: 1, pid: 0 }).then((res) => {
  // console.log(res)
  if (res.status == STATUS.SUCCESS) {
    data.data1 = res.data.data
  }
})

/**添加菜单对话框 */
const dialogVisible = ref(false)
/**添加菜单表单 */
const form = reactive<TS.from>({
  name: '',
  ids: '',
  text: '',
  flag: false,
  type: '',
  icon: '',
  status: ''
})
/**添加权限确定按钮 */
const qd = () => {
  purviewAddPost(form).then((res) => {
    console.log(res)
  })
}
</script>

<style lang="scss" scoped>
.permissions-box {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 15px 0 0 15px;
  width: 1310px;
}
</style>

