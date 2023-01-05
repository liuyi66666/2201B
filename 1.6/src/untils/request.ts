import axios from "axios"
// import { getToken } from "./auth"
// import router from '@/router'


const http = axios.create({
  // baseURL: "",
  timeout: 1000 * 30,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json; charset=utf-8"
  // }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(
  (config) => {
    /**token可变的,根据接口文档进行变化 */
    // config.headers["Authorization"] = getToken() //请求头带上token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */
http.interceptors.response.use(
  (response) => {
    
    return response
  },
  (error) => {
    return Promise.reject(error)

  
  }
)

export default http
