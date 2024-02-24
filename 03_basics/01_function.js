function greet(){
    console.log("hello")
    console.log("world")
}

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
const result =addTwoNumbers(3,4)
console.log("Result:",result) 

function add(n1,n2){
    return n1+n2
}
const res=add(10,20)
console.log("Result:",res)

function loginUserMessage1(username){
    return `${username} just logged in`
}
console.log(loginUserMessage1("harshit"))
console.log(loginUserMessage1())

//adjusting the "undefined just logged in"
function loginUserMessage2(username){
    //if(username===undefined){
    //    console.log("Please enter a username")
    //}
    if(!username){
        console.log("Please enter a username")
    }
    else{
    return `${username} just logged in`
    }
}
console.log(loginUserMessage2())

function loginUserMessage3(username="sam"){
    //if(username===undefined){
    //    console.log("Please enter a username")
    //}
    if(!username){
        console.log("Please enter a username")
    }
    else{
    return `${username} just logged in`
    }
}
console.log(loginUserMessage3())
console.log(loginUserMessage3("Hitesh"))


//Shopping cart case

function calculateCartPrice(...num1){
       return num1
}
console.log(calculateCartPrice(200,300,400))

const user={
     item: "Bottle",
     price: "100"
}

function handleObject(anyobject){
    console.log(`Item is ${anyobject.item} and it's price is Rs.${anyobject.price} `);
}

handleObject(user)
handleObject({
    item: "pen",
    price: "40"
})

const myNewArray = [100,200,300]
function handleArray(getArray){
    return getArray[1]
}
console.log(handleArray(myNewArray))
console.log(handleArray([10,20,30]))