let express = require("express") //引入express
let Mock = require("mockjs") //引入mock
let app = express() //实列化 express
// 登录返回数据
const loginData = require("./common/login.json")
//左侧侧边栏返回的数据
const menusData = require("./common/menus.json")
// 用户管理数据列表
const usersData = require("./users/users.json")
// 添加用户管理返回的数据
const addUserData = require("./users/addUsers.json")
// 编辑用户管理返回的数据
const editUserData = require("./users/editUsers.json")
// 删除用户管理返回的数据
const deleteUserData = require("./users/deleteUsers")
// 点击修改用户的状态
const typeUserData = require("./users/typeUsers.json")
// 分配角色的列表
const roleListData = require("./users/roleList.json")
// 确认分配角色
const roleData = require("./users/role.json")
// 权限列表返回的数据
const rightsData = require("./users/rights.json")
// 权限型结构返回的数据 treeRoles
const TreeData = require("./users/treeRoles.json")
// 商品列表返回的数据
const goodsData = require("./goods/goods.json")
// 商品列表添加返回的数据
const addgoodsData = require("./goods/addgoods.json")
// 商品列表根据id搜索返回的数据
const idgoodsData = require("./goods/goodsid.json")
// 商品分类列表返回的数据
const categoriesData = require("./goods/categories.json")

// 参数分类列表返回的数据
const attributesData = require("./goods/attributes.json")
// 订单列表返回的数据
const orderData = require("./common/order.json")
// 修改订单列表返回的数据
const uporderData = require("./common/uporder.json")
// 产看订单详情
const findorderData = require("./common/findorder.json")
// 查看地址信息
const findmessageData = require("./common/findmessage.json")


/**登录接口 */
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})


// 侧边栏
app.use("/menus", function (req, res) {
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})

// 用户列表
app.get("/users", function (req, res) {
  res.json(
    Mock.mock({
      ...usersData
    })
  )
})

// 添加用户列表
app.post("/users", function (req, res) {
  res.json(
    Mock.mock({
      ...addUserData
    })
  )
})

// 编辑用户列表
app.put("/users/:id", function (req, res) {
  res.json(
    Mock.mock({
      ...editUserData
    })
  )
})

// 删除用户列表
app.delete("/users/:id", function (req, res) {
  res.json(
    Mock.mock({
      ...deleteUserData
    })
  )
})

// 修改用户状态
app.put("/users/:uid/state/:type", function (req, res) {
  res.json(
    Mock.mock({
      ...typeUserData
    })
  )
})

// 获取分配角色列表
app.get("/roles", function (req, res) {
  res.json(
    Mock.mock({
      ...roleListData
    })
  )
})

// 确认分配角色
app.put("/users/:id/role", function (req, res) {
  res.json(
    Mock.mock({
      ...roleData
    })
  )
})


// 获取权限列表
app.use("/rights", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...rightsData
    })
  )
})


// 获取权限数列表
app.use("roles/:roleId/rights", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...TreeData
    })
  )
})

// 获取商品列表
app.use("/goods", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...goodsData
    })
  )
})

// 获取商品列表添加返回的数据
app.use("/goods", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...addgoodsData
    })
  )
})

// 获取商品列表搜索返回的数据
app.use("/goods/:id", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...idgoodsData
    })
  )
})

// 获取商品分类列表
app.use("/categories", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...categoriesData
    })
  )
})

// 获取分类参数列表
app.use("/categories/:id/attributes", function (req, res) {
  res.json(
    Mock.mock({
      ...attributesData
    })
  )
})

// 获取订单分类列表
app.use("/orders", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...orderData
    })
  )
})

// 修改订单分类列表
app.use("/orders/:id", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...uporderData
    })
  )
})

// 查看订单信息列表
app.use("/orders/:id", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...findorderData
    })
  )
})

// 查看地址信息列表
app.use("/kuaidi/:id", function (req, res) {
  console.log(req, "req")
  res.json(
    Mock.mock({
      ...findmessageData
    })
  )
})

app.listen("8090", () => {
  console.log("监听端口 8090")
})
