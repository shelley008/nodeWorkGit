const http = require('http')
const path = require('path')
const fs = require('fs')



let server = http.createServer()


server.on('request',(req,res) => {

    let conType = 'text/plain'



    //url:全路陉
    let fileName = path.join(__dirname,'web/',req.url)


    switch(path.extname(fileName)){
        case '.png':
            conType = 'image/png';
            break;
        case '.jpeg':
        case '.jpg':
            conType = 'image/jpeg'
            break;
        case '.gif':
            conType = 'image/gif';
            break;
        case '.html':
            conType = 'text/html';
            break;
        default:
            conType = 'text/plain'
    }

   //设置响应的文件类型和状态码
    res.writeHeader(200,{'Content-Type':conType})

   //url全路陉
   let reader = fs.createReadStream(fileName)
   reader.pipe(res)


})



server.listen(48881, () => {
    console.log('服务器端开始监听端口:48881, 用浏览器打开 http://localhost:48881')
})