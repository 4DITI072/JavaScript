//obj literal

const user ={
    username: "Aditi",
    loginCount: 8,
    signedIn: true,
    //properties

    //methods
    getUserDetails : function(){
        console.log("Got user details from DB");
        console.log(this);
        console.log(`username : ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//empty

const user2 ={
    username: "Aditi",
    loginCount: 8,
    signedIn: true,
    //properties

    //methods
    getUserDetails : function(){
        console.log("Got user details from DB");
        console.log(this);
        console.log(`username : ${this.username}`);
    }
}


//but cant do for 50 or more users hence constructor function

function User(username, loginCount, loggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.loggedIn=loggedIn;
    //return this;         implicitly defined

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
}

//new keyword creates new obj 
//new calls constructor function

const user1= new User("Aditi", 6, true);
const user3=new User("Adit",11,false);
console.log(user1);
console.log(user3);