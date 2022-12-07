let express=require("express")
let Mock=require("mockjs")
const loginData=require("./commom/login.json")
const menuData=require("./commom/menu.json")
let app=express()
app.use("/login",function(req,res){
	console.log(req,res)
	res.json(
		Mock.mock({
		...loginData
	}))
})
// 侧边栏
app.use("/menu",function(req,res){
console.log(req)
res.json(
	Mock.mock({
		...menuData
	})
)
})

app.listen("8090",()=>{
	console.log('监听端口 8090')
})
