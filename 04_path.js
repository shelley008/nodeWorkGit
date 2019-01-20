//引入path模块
const path = require('path')

var strPath1 = '/home/aicoder/com/index.html';
var strPath2 = "C:\\Users\\admin\\Desktop\\nodeWork\\index.html"
console.log(path.basename(strPath1))
console.log(path.basename(strPath2))
console.log(path.basename(strPath2,'.html'))

console.log(path.delimiter)
console.log(path.posix.delimiter)
console.log(path.win32.delimiter)

//返回路径 path.dirname
console.log(path.dirname(strPath1));

//当前文件完整路径   __filename
console.log(__filename)
console.log(path.dirname(__filename))
//当前文件路径 __dirname


//获取文件的扩展名
console.log(path.extname('aa.js'))


//合并路径
console.log(path.join('/','home/dir','index.html'))

//把字符串转成对象
console.log(path.parse('/home/user/dir/file.txt'))
console.log(path.parse(strPath2))