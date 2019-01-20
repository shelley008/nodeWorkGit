const fs = require('fs')
const path = require('path')


//异步读路径, __dirname:当前路径名
//读取一个路径，返回路径下的所有头文件和文件夹名字
fs.readdir(__dirname,function(err,files){
   // console.log(files)
    files.forEach(function(item,index){
        fs.stat(path.join(__dirname,item),function(err,stat){
            //console.log(stat)
            stat.isFile() ? console.log('file:',item) : console.log('dir',item)
        })
    })
})