// js is dynamic type programming language

// #Primitive datatypes(call by value)

// 7 types: 
/* String,Number,Boolean,null,undefined,Symbol,BigInt*/
  
// #Non-primitive datatypes(call by reference)

//Array, Objects, Functions
const arr=["a","b","c"]
//obj: key value pair
let obj={
    name:"harshit",
    age:"20",
}
//variable type declaration of function
const myFunction=function(){
    console.log("hello world")
}

//https://262.ecma-international.org/5.1/#sec-11.4.3

/* Stack and heap*/

//stack memory(uses copy of variable) used for primitive datatypes.
//Heap memory(uses original value via referencing) used for non-primitive datatypes

let names = "harish"
let names2 = names
names2="garish"

console.log(names)
console.log(names2)

let user1 ={
    email: "user@gmail.com",
    upi: "user@ybl"
}
let user2=user1
user2.email = "user@yahoo.com"
console.log(user1.email)
console.log(user2.email)



