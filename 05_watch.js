const fs = require('fs')

//启动监听文件夹
let watcher = fs.watch(__dirname)

//监听改变的事件
watcher.on('change',function(eventType,filenNme){
    console.log('change1: ',eventType,filenNme)
})

//关闭监听
setTimeout(function(){
    watcher.close()
},40000)


let watcher2 = fs.watch(__dirname,function(eventType,fileName){
    console.log('callback',eventType,fileName)
})
