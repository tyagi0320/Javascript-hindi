const score=400
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const num1=23.89657
const num2=12345.567
console.log(num1.toPrecision(2))
console.log(num2.toPrecision(2))

const hundreds = 100000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

//MAX_VALUE,MIN_VALUE,MAX_SAFE_INTEGER

/*******MATHS********/

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.33))
console.log(Math.floor(4.7))
console.log(Math.max(14,33,25))

console.log(Math.random())
//Value of number from math.random lies between 0 to 1
console.log(Math.random()*10+1)
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)


const min= 10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min)



