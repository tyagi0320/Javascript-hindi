// array
// arrays in js are resizable
const myArr1 =[0,1,2,3,4,5]
console.log(myArr1[0])
//const myArr = ["shaktiman","naagraj"]
const myArr2=new Array(1,2,3,4,5)
console.log(myArr2[3])

//Array methods

myArr1.push(69)
myArr1.push(88)
myArr1.pop()
myArr1.unshift(15)
console.log(myArr1)
myArr1.shift()
console.log(myArr1)

console.log(myArr1.includes(0))
console.log(myArr1.indexOf(69))
//cpnversion of myArr1 to string newmyArr1
const newmyArr1=myArr1.join()
console.log(myArr1)
console.log(newmyArr1)

//slice,splice

console.log("A", myArr1)

const myn1=myArr1.slice(1,3)
console.log(myn1)
console.log("B ",myArr1)

const myn2=myArr1.splice(1,3)
console.log(myn2)
console.log("C",myArr1)