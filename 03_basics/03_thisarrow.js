const user={
    username: "Harshit",
    price: 999,
    
    //we use this to refer current context(current object here)
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this)
        //the above statement returns the current context
    }

}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

//console.log(this) => returns empty object because "this" is not specific about reffering to any context 

//NOTE:Browser ke andar global object is windows. But , on environments like node global object is empty.
//Hence, doing  console.log(this) globally on webpage inspect, we get windows object as output.
//But, doing console.log(this) globally on node environment, we get empty object as output.

//Let us do console.log(this) in a function.
function chai1(){
    console.log(this);
}
chai1()
//Calling chai1() will return lot of values.
function chai2(){
    username="harshit",
    console.log(this);
}
chai2()
//calling chai2() will return udefined values.
//HENCE, this works for objects only, using it for functions is no good.



//+++++++++++ARROW+++++++++++++

const chai3 = () =>{
       let username = "Harshit"
       console.log(this.username);
}
chai3()
//returns undefined
const chai4= () => {
     let username="harshit"
      console.log(this)
}
chai4()
//returns empty object
//this keyword do not work in arrow functions as well.

//Arrowfunction [Method1-simple]
const addTwo = (num1,num2) =>{
    //use of return keyword in curly braces
    return num1+num2
}
console.log(addTwo(3,4))
//Arrowfunction [Method2-Implicit return] (No need of using parenthesis)
const addThree = (num1,num2,num3) => 
(num1+num2+num3)
//no need to use return keyword while using paenthesis
console.log(addThree(1,2,3))


//using parenthesis helps in wrapping object within it. 
const fun = (num1) => ({user:"sam"})
console.log(fun(2))
//const fun = (true) => {user:"sam"} => will throw an error
//console.log(fun)

