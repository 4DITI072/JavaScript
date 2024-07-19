class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username,email,pass){
        //direct access-always write first
        super(username);
        this.email=email;
        this.pass=pass;
        

    }

    addCourse(){
        console.log(`new course added by ${this.username}`);
    }
}

const chai=new Teacher("chai","gmsil.com","123");
chai.addCourse();

const u=new User("masalachai");
u.logMe()
console.log(chai===u);
console.log(chai instanceof Teacher);

