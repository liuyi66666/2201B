 import http from "./httpRequest"

 export const Login=(obj)=>http({
	url:"/login",
	method:"post",
	params:obj
})
