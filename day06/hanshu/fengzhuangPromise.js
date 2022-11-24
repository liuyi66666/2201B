// const fs=require('fs')

// 抽离和封装公共promisre
// function p(url){
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./hanshu/wu.md').then(res=>{
//     console.log(res.toString())
//     return res.toString()
// }).then((data)=>{
//     console.log(data)
//     p('./hanshu/liu.md').then(res=>{
//         // return res.toString()
//     }).then(()=>{
//         p('./hanshu/qi.md').then(res=>{
//             // return res.toString()
//         })
//     })
// })

// function getAgent(url){
//         return new Promise(function(resolve,reject){
//             fs.readFile(url,(err,data)=>{
//                 // if(err) reject(err)
//                 // resolve(data)
//                 reject('出错了')
//             })
//         })
//     }
//     getAgent('./hanshu/wu.md').then(res=>{
//         console.log(res,'36')
//     }).catch(err=>{
//         console.log(err,'38')
        
//     }).then((data)=>{
//         let result=getTroops().then(res=> res.toString())
//         console.log(result,'42')
//     }).catch(err=>{
//         console.log(err,'44')

//     }).then((data1)=>{
//         console.log(data1)
//     })

// const fs=require('fs')

// 抽离和封装公共promisre
// function p(url){
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./hanshu/wu.md').then(res=>{
//     console.log(res.toString())
//     return res.toString()
// }).then((data)=>{
//     console.log(data)
//     p('./hanshu/liu.md').then(res=>{
//         // return res.toString()
//     }).then(()=>{
//         p('./hanshu/qi.md').then(res=>{
//             // return res.toString()
//         })
//     })
// })

// function getAgent(url){
//         return new Promise(function(resolve,reject){
//             fs.readFile(url,(err,data)=>{
//                 // if(err) reject(err)
//                 // resolve(data)
//                 reject('出错了')
//             })
//         })
//     }
//     getAgent('./hanshu/wu.md').then(res=>{
//         console.log(res,'36')
//     }).catch(err=>{
//         console.log(err,'38')
        
//     }).then((data)=>{
//         let result=getTroops().then(res=> res.toString())
//         console.log(result,'42')
//     }).catch(err=>{
//         console.log(err,'44')

//     }).then((data1)=>{
//         console.log(data1)
//     })

// const fs=require('fs')

// 抽离和封装公共promisre
// function p(url){
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./hanshu/wu.md').then(res=>{
//     console.log(res.toString())
//     return res.toString()
// }).then((data)=>{
//     console.log(data)
//     p('./hanshu/liu.md').then(res=>{
//         // return res.toString()
//     }).then(()=>{
//         p('./hanshu/qi.md').then(res=>{
//             // return res.toString()
//         })
//     })
// })

// function getAgent(url){
//         return new Promise(function(resolve,reject){
//             fs.readFile(url,(err,data)=>{
//                 // if(err) reject(err)
//                 // resolve(data)
//                 reject('出错了')
//             })
//         })
//     }
//     getAgent('./hanshu/wu.md').then(res=>{
//         console.log(res,'36')
//     }).catch(err=>{
//         console.log(err,'38')
        
//     }).then((data)=>{
//         let result=getTroops().then(res=> res.toString())
//         console.log(result,'42')
//     }).catch(err=>{
//         console.log(err,'44')

//     }).then((data1)=>{
//         console.log(data1)
//     })

