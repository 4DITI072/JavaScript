//
let myname="Aditi   ";
console.log(myname.length);
console.log(myname.trueLength); 
//undefined

let myhero=["thor","spiderman"]
let heropow={
    thor:"hammer",
    spiderman:"sling",

    getSpidyPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aditi=function(){
    console.log("Aditi is everywhere");
}

Array.prototype.hiAditi=function(){
    console.log("Aditi says hello");
}

myhero.aditi()
myhero.hiAditi()
//heropow.hiAditi() -- as objects does not have access only array does


/*Object.prototype.trueLength=function(){
    console.log(this.trim().length);
}*/

const user={
    name:"Chai",
    email:"chai@google.com"
}
const teacher={
    makeVideo:true
}
const teachsupport={
    isAvailable:false
}

const TASupport ={
    makeAssignemnt: 'js assign',
    fullTime: true,
    __proto__:teachsupport
}

teacher.__proto__=user;

//modern syntax:
Object.setPrototypeOf(teachsupport,teacher);

//trueLength
String.prototype.trueLength=function(){
    console.log(`${this} ki true length is ${this.trim().length}`);
}
"Aditi   ".trueLength();

