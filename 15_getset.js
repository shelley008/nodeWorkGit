function Stu(name){
    this._name = name;
};

Stu.prototype = {
    constructor:Stu,
    get Name(){
        return this._name;
    },
    set Name(val){
        if(val){
            this._name = val
        }
    }
};


var s = new Stu('shelley');

console.log(s.Name);


s.Name = 'huahua';
console.log(s.Name);

s.Name = '';
console.log(s.Name);

