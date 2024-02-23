//DATES

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myDate1=new Date(2023,0,23)
console.log(myDate1)
let myDate2=new Date(2023,0,23,5,3)
console.log(myDate2)
let myDate3=new Date("01-01-2024")
console.log(myDate3)

let myTimeStamp=Date.now()
//printing  milli seconds from 01-01-1970
//console.log(myTimeStamp)
//console.log(myDate3.getTime())
//converting milli seconds to seconds
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{ 
    weekday: "long"
})