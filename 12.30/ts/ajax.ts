

interface Params{
    methds: string,
    url: string
}
enum CODE{
    SUCESS=200,
    READY=4
}
function ajaxGet(methds:Params["methds"],url:Params["url"] ){
    // 实例化ajax方法
    let ajax: XMLHttpRequest= new XMLHttpRequest()
    // 建立连接
    ajax.open(methds,url)
    // 发送请求
    ajax.send()
    ajax.onreadystatechange= function (){
        if(ajax.status==CODE.SUCESS&& ajax.readyState==CODE.READY){
            console.log(ajax.response)
        }
    }
}

class People{
    name: string
    age: number
    constructor(name: string,age:number){
        this.name=name
        this.age=age
    }
    sport():string{
        return `${this.name}运动会`
    }

}
let p=new People('小明',18)
console.log(p.sport())