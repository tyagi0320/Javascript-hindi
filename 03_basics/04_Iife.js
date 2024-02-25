//Why Immediatley Invoked Function Expression (IIFE)?
//1.when we want to invoke out function just after declaring it.
//2. to prevent pollution caused by the global scope variables.


(function chai(){
    //named iife without passing any parameters
    console.log(`DB CONNECTED`);
})();
//end the iife by semicolon becuase once iife is implemented it doesnot know when to end.
//():First parenthesis=> function defination
//():Secomd parenthtesis=> execution call

((name) => {
    //unnamed iife by passing parameters
    console.log(`DB CONNECTED ${name}`)
})("harshit");

  