class User{
    constructor(email,pass){
        this.email=email,
        this.pass=pass
    }

    get pass(){
        return this._pass.toUpperCase()
    }
    //get and set are to be defined simultaneously
    set pass(val){
        this._pass=val
    }
    //as both constructor and setget()
}

const aditi=new User("gmail.com","abc")
console.log(aditi.pass);

