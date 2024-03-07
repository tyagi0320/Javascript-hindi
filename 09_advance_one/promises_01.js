//.then() lagake we can take values.
//.catch() lagake we can take values in case of error.

const promiseOne = new Promise(function(resolve,reject){
    //Do an asyn task
    //DB calls,cryptography,network calls

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

//.then is directly related with resolve
promiseOne.then(function(){
    console.log("promiseOne consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve()
    },1000)
}).then(function(){
    console.log("promiseTwo consumed");
})

const promiseThree = new Promise(function(resolve,reject){
     setTimeout(function(){
    resolve({username: "chai", email:"chai@example.com"})
     },1000)
    })

     promiseThree.then(function(user){
console.log(user);
     })


const promiseFour= new Promise(function(resolve,reject){
        setTimeout(function(){
            let error=false
            //try using: let error=true
            if(!error){
                resolve({username:"harshit",password:"1234"})
            }
            else{
                reject('ERROR:Something went wrong')
            }
        }, 1000)
     }) 

    promiseFour
    .then((user)=>{
        console.log(user);
        return user.username
    })
    .then((username)=>{
        console.log(username);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(()=> console.log("The promise is either resolved or rejected."))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR: JS WENT WRONG')
        }
    }, 1000)
})
      

async function consumePromiseFive(){
    try{
        const respnse = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

//WRITING ABOVE TRY-CATCH CODE IN .THEN() FORMAT


//fetch('https://jsonplaceholder.typicode.com/users')
//.then((response) => {
//    return response.json()
//})
//.then((data) => {
//    console.log(data);
//})
//.catch((error) => console.log(error))


