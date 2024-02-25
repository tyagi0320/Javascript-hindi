var c=300
//{}=>scope, inside these curly braces we have block scope. Outside these curly braces we have global scope.
if(true){
    let a=10
    const b=20
    var c=30
}
//console.log(a) => throws error since a is not returned
//console.log(b) => throws error since b is not returned
//console.log(c) => doesnot throws error, it will return 30.Moreover in global scope we have c=300 but still c=30 get printed. Hence, we generally avoid using "var".

//NOTE: Inspect ke andar ka gloabl scope is different from node ka global scope.


function one(){
    const username="harshit"

    function two(){
        const website="youtube"
        console.log(username)
    }
   //console.log(website) =>throws error, you cannot access this because iska scope function two tak hi hai
    two()
}
one()
//NOTE:In nested functions, child function(two here) can access variables of their parent (one here) variables.

if(true){
    const user ="hitesh"
    if(user==="hitesh"){
        const web=" youtube"
        console.log(user+web)
    }
   // console.log(web)=>throws error because "web" is out of scope  of the inner if-else loop
}
//console.log(user) => throws error because "user is out of scope" of if-else loop

//+++++++Interesting+++++++++=

//Refered as function only
//addone(5) => returns no error, addone(5) will be executed.
function addone(num){
    return num+1
}


//Refered as function or expression
//addtwo(5) => throws error, when you declare function by const method you cannot call it before declaration.
const addtwo=new function(num){
    return num+2
}
//Hoisting,execution context