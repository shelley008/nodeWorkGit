const fs = require('fs');
const path = require('path');


let srcFile = path.join(__dirname,'a.mp4');
let distFile = path.join(__dirname,'b.mp4');


//创建可读流
let rs = fs.createReadStream(srcFile)
//创建可写流
let ws = fs.createWriteStream(distFile)


//读文件
rs.on('open',function(fd){
    console.log('开始读文件')
})

rs.on('close',function(){
    console.log('结束读取文件')
})

rs.on('data',function(trunk){
    if(ws.write(trunk) === false){
        //缓冲区满了，不能再写入
        //可读流暂停读数据
        rs.pause()
    }
})


ws.on('drain',function(){
    //可写流可以继续写入时，让可读流继续读数据
    rs.resume()
})

