const fs = require('fs');
const path = require('path');

//读取当前文件的内容，设置了编码：utf8
//同步: readFileSync是同步方法,当node执行到此代码时，整个程序等待文件读取完，再往下执行
// let fileContent = fs.readFileSync(__filename,{
//     encoding:'utf8'
// })
//
// console.log(fileContent)


// 异步读取: 主线程继续执行后面的代码，线程池的线程读取文件内容，文件内容读取成功后，调用回调函数
// 仅用于读小文件
let indexJsFileName = path.join(__dirname,'index.js');
fs.readFile(indexJsFileName,{encoding:'utf8'},function(err,data){
    console.log('文件读取完，执行回调函数...')
    if(err) {
        console.log('出现读取异常',err)
        return;
    }
    console.log(data)
})

console.log('主线程继续执行.....')

