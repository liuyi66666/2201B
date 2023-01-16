import http from './Httprequest'

function Login(params) {
  return http({ url: http.addorUrl('/sys/login'), method: 'get', params })
}
export {Login}
