class Human{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    show(){
        console.log("name: %s, age: %s",this.name,this.age)
    }

}

class Student extends Human {
    constructor(name,age,classNum){
        //调用父类的构造函数
        super(name,age)

        //子类自己的属性
        this.classNum = classNum
    }

    stuShow() {
        console.log("name: %s, age: %s, classNum:%s",this.name,this.age,this.classNum)
    }
}


let s = new Student('zgh',30,'00001')
s.stuShow()
s.show()