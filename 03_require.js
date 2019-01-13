const path = require('path')

var t = path.join(__dirname,__filename);
var m = path.join('/foo','bar','abc');

console.log(m)


//引入相对路径文件
const math = require('./02_math.js')
//console.log(math.add(9,33))

//引入绝对路径文件
const math2 = require('/Users/admin/Desktop/nodeWork/02_math.js')
console.log(math2.add(9,10))


const mm = require('./index.js')
mm.show()
//引入第三方文件夹
const n = require('./tm/')
n.myShow()

//加载第三方自定义模块
const strignW = require('string-width')
let num = strignW('我是she')
console.log(num)
console.log(module.paths)



