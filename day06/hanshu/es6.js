const fs = require('fs')
function getPeach (){
      return new Promise((resolve,reject)=>{
        fs.readFile('./wu.md',(err,data)=>{
          // if(err) reject(err)
        //  resolve(data)
    
        reject('我是wu返回的错误信息')
        })
      })
    }
function getPeach (){
  return new Promise((resolve,reject)=>{
    fs.readFile('./liu.md',(err,data)=>{
    //   if(err) reject(err)
    //  resolve(data)
    reject('我是liu返回的错误信息')
     })
  })
}

// 
function getTroops (){
  return new Promise((resolve,reject)=>{
    fs.readFile('./qi.md',(err,data)=>{
    //   if(err) reject(err)
    //  resolve(data)
    reject('我是qi返回的错误信息')
    })
  })
}

getPeach().then(res=>{
  console.log(res);
}).then((data)=>{

  let result = getTroops().then(res=> res.toString())
  console.log(result);
}).then((data1)=>{
  console.log(data1);
  getAgent().then(res=>{
    console.log(res.toString());
  })
})
.catch(err =>{
  console.log(err);
})