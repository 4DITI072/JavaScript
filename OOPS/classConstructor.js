//after ES6

class User{
    //prop+methods

    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPass(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai=new User("chai","gmail.com","123");
console.log(chai.encryptPass());
console.log(chai.changeUsername());

