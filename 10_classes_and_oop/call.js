// function.call(this, parameter) enables us to call parameter of one scope to another scope.

//call jo hai humara current execution context kisi aur function ko pass kardeta hai.

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);