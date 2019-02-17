
const http = require('http')

// http.get('http://aicoder.com',res=>{
//     res.on('data',trunk =>{
//         console.log(trunk.toString('utf8'))
//     })
// })


let request = http.request({
    protocol:'http:',
    host:'baidu.com',
    port:80,
    method:'POST',
    timeout:2000,
    path:'/'
}, res =>{
   res.on('data',trunk => console.log(trunk.toString('utf8')))
})


request.end()