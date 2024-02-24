//const tinderUser = new Object() : singleton object
//const tinderUser = {} : non singleton object
//console.log(tinderUser) => It will return an empty object for both cases.

const tinderUser= {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn= true
console.log(tinderUser)
//Accesing keys of objects
//The keys which are retrieved are stored in form of array 
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
//Checking if key is present or not
console.log(tinderUser.hasOwnProperty("id"))
console.log(tinderUser.hasOwnProperty("age"))


const user={
    email: "harshit@email.com",
    fullname: {
        userfullname: {
            firstname:"Harshit",
            lastname:"Tyagi"
        }
    }
}

//console.log(user.fullname)
//console.log(user.fullname.userfullname.firstname)

//Combining two objects
//1.Object ke andar object:
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"p",4:"q"}
const obj3 = {obj1,obj2}
console.log(obj3)
//2.Actually combinig two objects as one
const obj4 = Object.assign({},obj1,obj2)
//here {}: target object where other source objects (obj1,obj2) will get stored
console.log(obj4)
//3.Using spread operator
const obj5 = {...obj1, ...obj2}
console.log(obj5)

const users = [
    {
        id:1,
        email:"a@emal.com"
    },
    {
        id:2,
        email:"b@email.com"
    },
    {id:3,
     email:"c@email.com"
    }
]
console.log(users[0].email)



