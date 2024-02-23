const marvel= ["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

//marvel.push(dc)
//console.log(marvel)
//console.log(marvel[3][1])

const all=marvel.concat(dc)
console.log(all)

//spread =>alternate for concat

const all_new=[...marvel, ...dc]
console.log(all)

const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const new_arr1=arr1.flat(Infinity)
//infinity: automatically interprets the depth of array.(In arr1 depth=3)
console.log(new_arr1)

//Asking if hitesh is an array
console.log(Array.isArray("Hitesh"))
//Converting hitesh to array
console.log(Array.from("Hitesh"))

console.log(Array.from({name: "hitesh"})) //interesting 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
