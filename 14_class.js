//定义一个Human类
function Human(name,age){
    this.name = name;
    this.age = age;
}

Human.prototype.show = function(){
    console.log(this.name,this.age)
}

var h = new Human('aicoder.com',19)
h.show()


//es中定义类型和构造函数


class Student {
    //定义构造函数
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    //在类的内部 定义方法都是在原型上
    showStu(){
        console.log(this.name,this.age)
    }
}

//创建类型 实例, 在es6中，必须用new
let s = new Student('shelley',28)
s.showStu()