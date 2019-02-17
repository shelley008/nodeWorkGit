const connect = require('connect')

//connet:本身是一个函数，返回一个中间性的控制器

let app = connect();


//注册中间件
app.use(function(req,res,next){
    console.log('1')
   next()
})

app.use((req,res,next) => {
    console.log('2')
    next()
})

app.use('/api',function(req,res,next){
    console.log('4')
    next()
})

app.use((req,res) =>{
    res.write('wwwwwww')
    console.log('3')
    console.log('---------******************--------')
    res.end()
})

//错误处理中间件
app.use( (err,req,res,next) => {

})

app.listen(58899,() => {
    console.log('http://localhost:58899')
})