const net = require('net');


//创建服务器端对象
let server = net.createServer();


server.on('connection',client => {
    //client 是客户端的一个对象，可以通过它给客户发送数据，可写流，可读流

    client.on('data',thunk => {
        console.log(thunk.toString('utf8'))
    })

    //往客户端写入数据
    client.write('hello from sever');

    client.end('close-----')

})


//监听端口
server.listen(5888, () => {
    console.log('******** opened server on')
})