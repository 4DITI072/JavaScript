function setUsername(username){
    this.username=username
}

function createUser(username,email,pass){
    //setUsername(username)//not calling-only referenced

    //setUsername.call(username)//only called
    setUsername.call(this,username)
    this.email=email
    this.pass=pass
}

const chai=new createUser("chai","gmail.com","123");
console.log(chai);