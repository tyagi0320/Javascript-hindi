//for
for(let i=1;i<=10;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        console.log(`Inner loop value: ${j}`)
    }
}
let myArray=["harish",'suresh','ramesh']
console.log(myArray.length);
for(let index=0;index<myArray.length;index++){
    const element=myArray[index]
    console.log(element)
}
//break and continue
for(let i=0;i<=20;i++){
    if(i==5){
        console.log("Detected 5");
        //break;
        continue;
    }
    console.log(`Value of i is: ${i}`)
}
//while
while(2==2){
    console.log("hello world!")
    break;
}
//do while
let score=0
do{
    console.log("Hi harshit");
    score++;
}
while(score<=4)