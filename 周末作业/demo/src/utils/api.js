import http from "./request.js"
// 用户列表数据
export const getList=(obj)=>http({
    url:"https://elm.cangdu.org/v1/users/list",
    method:"get",
    params:obj
})
// 管理员列表
// https://elm.cangdu.org/admin/all?offset=0&limit=20
export const Administretorye=(obj)=>http({
    url:"https://elm.cangdu.org/admin/all",
    method:"get",
    params:obj
})
// 商家列表数据
// https://elm.cangdu.org/shopping/restaurants
export const getShop=(obj)=>http({
    url:"https://elm.cangdu.org/shopping/restaurants?latitude=35.895161&longitude=115.498688&offset=0&limit=20",
    method:"get",
    params:obj
})

// 食品列表
// https://elm.cangdu.org/shopping/v2/foods/count
export const Foodye=(obj)=>http({
    url:"https://elm.cangdu.org/shopping/v2/foods",
    method:"get",
    params:obj
})
// 订单列表
// https://elm.cangdu.org/bos/orders
export const Orderye=(obj)=>http({
    url:"https://elm.cangdu.org/bos/orders",
    method:"get",
    params:obj
})

// 添加城市数据
export const Mycity=(obj)=>http({
    url:"https://elm.cangdu.org/shopping/v2/restaurant/category",
    method:"get",
    params:obj
})

// 
export const Addcity=(obj)=>http({
    url:"https://elm.cangdu.org/v1/cities?type=guess",
    method:"get",
    params:obj
})