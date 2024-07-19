class User{
    constructor(name){
        this.name=name;

    }

    logMe(){
        console.log(`username is ${this.name}`);

    }

    static createId(){
        return '123';
    }
}

const aditi=new User("Aditi");
aditi.createId();

class Teacher extends User{
    constructor(name,email){
        super(name);
        history.email=email;

    }
}

const iphone=new Teacher("iphone","gmail.com");
console.log(iphone.logMe());