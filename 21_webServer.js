const net = require('net');


//创建服务器端对象
let server = net.createServer();


server.on('connection',client => {
    //client 是客户端的一个对象，可以通过它给客户发送数据，可写流，可读流

    client.on('data',thunk => {
        console.log(thunk.toString('utf8'))
    })

    //往客户端写入数据
    client.write(`HTTP/1.1 200 OK
 Server: Apache
 Content-Type:text/html
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>
    这是来之服务器的内容...
</h1>
</body>
</html>
 `);

    client.end('over-----')

})


//监听端口
server.listen(58888, () => {
    console.log('服务器开始监听58888。。。。。。')
})