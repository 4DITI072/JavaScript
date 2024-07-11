const user ={
    username : "Aditi" ,
    price: 99,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
    }
    //hence this is for current context

    user.welcomeMsg();

    console.log(this);//empty

    //Arrow function is a modification of function to () => rest is same.

    const userArrow = () => {
        let username = "Aditi" 
        console.log(this.username);//undefined
        console.log(this);//empty
        }
        
    userArrow();

//EXPLICIT RETURN
const add2Arrow = (n1, n2) => {
    return n1+n2;
}

//IMPLICIT RETURN
const add2Notafun = (n1,n2) => (n1+n2);

console.log(add2Arrow(3,4));
console.log(add2Notafun(4,4));

//To Return OBJ
const addtwo= (n1,n2) => ({username: "Aditi"})