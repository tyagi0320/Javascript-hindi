//Two ways to declare an object : literal and constructor
//singleton
//When we create an object by literal way we dont use singleton but when we create an object by constructor way we use singleton.

/*object constructor
Object.create
*/
//Object literals

//creating symbol object
const mysym = Symbol("key1")
const JsUser={
    name:"Harshit",
    //symbol
    [mysym]:"key1",
    age:20,
    location:"delhi",
    email:"harshit@google.com",
    isLoggedIn:false,
    lastLogindays:["Monday","Tuesday"]
}
//Printing full object:
console.log(JsUser)
//Accessing object
//Okayish way=>console.log(JsUser.email)
//Other way to acces object:
console.log(JsUser["email"])
//avoid qoutation while calling symbol
console.log(JsUser[mysym])

console.log(JsUser["isLoggedIn"])

//Changing object values
JsUser.email="harshit@yahoo.com"
console.log(JsUser["email"])

//Adding function in object
JsUser.greeting=function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting())
//console.log(JsUser.greeting) => This will return reference of function rather than the value
JsUser.greetingtwo=function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greetingtwo())

//Freezing objects
Object.freeze(JsUser)
JsUser.name="hitesh"
console.log(JsUser["name"])

