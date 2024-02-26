const score=200

if (score > 100){
    var power ="fly"
    console.log(`User Power: ${power}`);
}
console.log(`User Power: ${power}`)
//Scope of "var" is global and not limited to only a particular scope.

//Let us use "const"/"let": We will get error because scope of "const"/"let" is limited within the blocks.

const hp=200

if(hp<500){
    let health="weak"
    console.log(`User is: ${health}`);
}
console.log(`User is: ${health}`)