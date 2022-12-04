<template>
  <div class="home">
    <el-button class="btn" type="primary" @click="dialogVisible = true"
      >添加</el-button
    >
    <!-- 日历 -->
    <el-calendar>
      <template slot="dateCell" slot-scope="{ date, data }">
        <!--自定义内容-->
        <div class="list">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(2).join("-") }}
          </p>
          <ul>
            <li v-for="(item, index) in $store.state.list" :key="index">
              <div
                @click="bianjiOne(index)"
                v-if="item.time == data.day && item.resource == '已完成'"
                class="btnOne"
              >
                {{ item.Name }}
              </div>
              <div
                @click="bianjiTwo(index)"
                v-if="item.time == data.day && item.resource == '未完成'"
                class="btnTwo"
              >
                {{ item.Name }}
              </div>
            </li>
          </ul>
        </div>
      </template>
    </el-calendar>

    <!-- 弹框-->
    <el-dialog title="添加todolist" :visible.sync="dialogVisible" width="40%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="代办名称" prop="Name">
          <el-input v-model="ruleForm.Name"></el-input>
        </el-form-item>
        <el-form-item label="代办时间" required prop="time">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.time"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="代办状态" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTodo('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 已完成 -->
    <el-dialog
      title="修改"
      :visible.sync="dialogVisibleOne"
      width="40%"
    >
      <el-form
        :model="ruleForm1"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="代办名称" prop="Name">
          <el-input v-model="ruleForm1.Name"></el-input>
        </el-form-item>
        <el-form-item label="代办时间" required prop="time">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm1.time"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="代办状态" prop="resource">
          <el-radio-group v-model="ruleForm1.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleOne = false">取 消</el-button>
        <el-button type="primary" @click="strueOne">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 未完成 -->
    <el-dialog
      title="修改todolist"
      :visible.sync="dialogVisibleTwo"
      width="40%"
    >
      <el-form
        :model="ruleForm2"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="代办名称" prop="Name">
          <el-input v-model="ruleForm2.Name"></el-input>
        </el-form-item>
        <el-form-item label="代办时间" required prop="time">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm2.time"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="代办状态" prop="resource">
          <el-radio-group v-model="ruleForm2.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleTwo = false">取 消</el-button>
        <el-button type="primary" @click="strueTwo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      dialogVisible: false,
      dialogVisibleOne: false,
      ruleForm: {
        Name: "",
        time: "",
        resource: "",
      },
      ruleForm1: {
        Name: "",
        time: "",
        resource: "",
      },
      dialogVisibleTwo: false,
      ruleForm2: {
        Name: "",
        time: "",
        resource: "",
      },
      
      // 正则验证
      rules: {
        Name: [{ required: true, message: "请输入代办名称", trigger: "blur" }],
        time: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择状态", trigger: "change" },
        ],
      },
      todoList: [],
    };
  },
  methods: {
    // 添加事件
    addTodo(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let date = new Date(this.ruleForm.time);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          month = month < 10 ? "0" + month : month;
          let dates = date.getDate();
          dates = dates < 10 ? "0" + dates : dates;
          let time = year + "-" + month + "-" + dates;
          let obj = {
            Name: this.ruleForm.Name,
            resource: this.ruleForm.resource,
            time: time,
          };
          this.$store.commit("addtodo", obj);
          this.dialogVisible = false;
        } else {
          return false;
        }
      });
    },
    // 修改事件已完成
    bianjiOne(index) {
      this.dialogVisibleOne = true;
      this.ruleForm1 = this.$store.state.list[index];
      this.ruleForm1.index = index;
    },
    strueOne(){
      this.$store.commit("strueOne", this.ruleForm1);
      this.dialogVisibleOne = false;
    },
    // 修改事件未完成
    bianjiTwo(index) {
      this.dialogVisibleTwo = true;
      this.ruleForm2 = this.$store.state.list[index];
      this.ruleForm2.index = index;
    },
    strueTwo(){
      this.$store.commit("strueTwo", this.ruleForm2);
      this.dialogVisibleTwo = false;
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.btn {
  float: left;
  // margin-left: 200px;
  margin-bottom: 20px;
}
.is-selected {
  color: #1989fa;
}
.list {
  display: flex;
  justify-content: space-between;
}

ul {
  margin: 0;
  padding: 0;
  margin-top: 3px;
}

p {
  display: inline-block;
}
.is-selected {
  color: #1989fa;
}
.btnOne {
  width: 100px;
  text-align: center;
  font-size: 14px;
  height: 20px;
  border: 0;
  outline: none;
  margin: 5px;
  color: #fff;
  background-color: #72a632;
}
.btnTwo {
  width: 100px;
  height: 20px;
  text-align: center;
  font-size: 14px;
  border: 0;
  outline: none;
  margin: 5px;
  color: #fff;
  background-color: #931d2e;
}
</style>
