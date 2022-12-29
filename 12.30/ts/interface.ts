/**interfince
 * 
 * 
 * 
 * 特点：相同名字的interface命名会合并
 * **/ 
 
interface Person{
    name: string,
    age: number,
    sex: number,
    isJob: boolean,
    hobby: string[],
    former: number,
    formerName: [string,string,string]
}
interface Person{
    idCat?:number
}
let person: Person={
    name: '小明',
    age: 9,
    sex: 4,
    isJob: true,
    hobby: ['看书','喝茶'],
    former: 0,
    formerName:['a','b','c'],
    idCat:123456789
}

// interface Vegetables{
//     color: string
// }

// interface Tomato{
//     color: string
//     radius: number
// }
// interface Tomato extends Vegetables{
    // radius: number
// }