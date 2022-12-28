/**number**/ 

let num1: number=1
let num2: number=1

let sum: number=num1+num2

/**string**/ 
let str1: string="ts初始"
let str2: string="学习"
let str: string=str1+str2

/**boolen**/ 

let bool: boolean=true
/**数组 array**/ 
let array :number[] =[1,2,3,4,5]
let array1 :[number] =[1]
let array2 :string[] =['1','2','3','4','5']
let array3 :boolean[] =[true,false]
let array4: Array<number>=[1,2,3,4,5]
let array5: Array<string>=['1','2','3','4','5']


/**元组**/ 
let tuple :[number,string,boolean] =[1,'2',true]

/**null  undefind
 * 概念：即为类型也为值
 * 
 * **/ 

let a: null=null
let b: undefined=undefined

/**object**/ 
// declare function create(o:object |null) :void 
// create({props: 0})
// create(null)
///create(3222) // 类型“number”的参数不能赋给类型“object”的参数。
//create(“dddd") // 类型“string”的参数不能赋给类型“obiect”的参数
//create(undefined) // Error类型“undefined”的参数不能赋给类型“object  nul”的参数//简单


let obj : {name: string,age : number}
obj={name:'小花',age:13}

let namel :any ="string"
namel=123



/**
 * enum 枚举
 * 
 * 
 * **/ 
enum CODE{
    SUCCESS=200,
    ERROR=500,
}
console.log(CODE.SUCCESS)
console.log(CODE['SUCCESS'])

enum CODE1{
    SUCCESS,
    ERROR
}
console.log(CODE.SUCCESS)
console.log(CODE.ERROR)

enum CODE2{
    SUCCESS=400,
    ERROR
}
console.log(CODE.SUCCESS)
console.log(CODE['ERROR'])

/**void**/ 

function getName(name:string,age :number){
    return name+age
}

function getName1(name: string,age: number) :void{
    console.log()
}
function getName2(name :string,age: number): string{
    return name+age

}

/**interface
 * 定义：类似于对象：{} 代码块
 * 
 * 和type**/ 

interface Person{
    name: string,
    age: number,
    sex: number,
    isJob: boolean,
    hobby: string[],
    former: number,
    formerName: [string,string,string]
}
// let person: Person={
//     name: '小明',
//     age: 9,
//     sex: 4,
//     isJob: true,
//     hobby: ['看书','喝茶'],
//     former: 0,
// }
/**交叉类型**/ 
interface use{
    name: string,
    age: number
}
interface per{
    sex: number
}
type allInfo =per & use
let persion: allInfo={name:"你好",age: 1,sex: 4}


/**联合类型**/ 
let allType: number | string
allType=1
allType="你好啊"
// allType =true

/**类型断言**/
/**尖括号**/ 
let someValue: any
someValue =123
someValue="dddd"
let someValueLength=(<string>someValue).length

/***as写法 */

let someName: any
someName =123
someName="dddd"
let someNameLength=(someName as string).length


