import http from "./request"

function Login(data:object){
    return http({
        url:('/api/sys/login'),
        method:'post',
        data
    })
}
export {Login}