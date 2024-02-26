//NOTE:js is single threaded,everything in js is a Process.

//JAVASCRIPT EXECUTION CONTEXT
//
//jec refers to how our javascript file is gonna run.

//Whenever we create any js file, global execution context is created by default.This global execution context (gec) is referred using "this" keyword.
//NOTE: gec in browser and gec in node.js are different.Value of this in browser comes out to be as "window object".

//Types of execution context(ec)
//1.Global ec
//2.Functional ec
//3.Eval ec

//Javascript runs our program in two phases.
//PHASE-1: Memory creation phase/Creation phase
//PHASE-2: Exection phase
//Difference in boht phases: In Creation phase memory is allocated to the variables declared.But in Execution phase the execution of logics and functions takes place.

//EXAMPLE CODE TO UNDERSTAND ITS WORKING:
/*
let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
*/

//WORKING:
//step-1: global execution/global env.  Whatever code it maybe, it is only run via gec by allocating "this" keyword.
//step-2: memory phase(PHASE-1)          All the variables are collected and kept together with value "undefined".    val1=undefined,val2=undefined,addnum=defination of function,result1=undefined,result2=undefined
//step-3: execution phase(PHASE-2 val1=10,val2=5,addnum= nil(kuch nhi hoga)

//result1-> addNum->a new ec is created where new variable env + execution thread is created.[*NOTE: jitni baar bhi functions execute hote hai utni baar ek naya executional context banta hai.]. Now addnum ke liye PHASE-1 and PHASE-2 aayega.Once these phases are done the respective executional context gets deleted.
//memory phase(PHASE-1) for const result1=addnum(val1,val2): val1=undefined,val2=undefined,total=undefined.
//execution phase(PHASE-2) for const result1=addnum(val1,val2): num1=10,num2=5,total=15->(*ye total get returned in gec)

//result2->addNum-> ek naya execution phase banega with new variable environment+thread.
//PHASE-1:val1=undefined,val2=undefined,total=undefined.
//PHASE-2:num1=10,num2=2,total=12->(*ye total get returned in gec)


//++++++++++CALL STACK+++++++++
//call stack mein bottom pe gec is pushed.Then fun1() is pushed(executed) and popped from stack, then fun2() is pushed and popped, then fun3() is pushed and popped. *This is when we first declare fun1(),fun2(),fun3() independently in respective orders.

//WHAT IF: fun3() is invoked in fun2() and fun2() is invoked in fun1(). In this case call stack mein bottom pe gec is pushed. Then popping takes place in LIFO manner. So, if fun1() is first pushed in call stack , then fun2() and then fun3() ; then in such case fun3() will be popped first then fun2() and then fun1().