let add = function(a,b){
    return a + b;
}

console.log(add(10,20))

let addA = (a,b) => a+b
console.log(addA(30,30))

var arr = [1,22,3,4,5,0]
// arr.sort(function(a,b){
//     return a - b;
// })

arr.sort((a,b) => a - b)
console.log(arr)

let t = () => {
    console.log(this)
}

t()