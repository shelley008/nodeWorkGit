const http = require('http')


http.createServer(function(req,res){

    console.log(req.headers)
    console.log(req.url)
    console.log(req.method)


    res.write('123')
    res.end()

}).listen(58990,()=>{
    console.log('监听58990成功，http://localhost:58990')
})