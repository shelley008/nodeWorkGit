const fs = require('fs');
const path = require('path');

let aFilePath = path.join(__dirname,'a.txt');


//异步写入
// fs.writeFile(aFilePath,'您好呀！, www.com',function(err){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('正常写入')
// })
// console.log('线程主程序继续执行...')

// 同步写入
fs.writeFileSync(aFilePath,'hello shelley',{flag:'a'})