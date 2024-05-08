//Primitives : 
/*
Strings
numbers
undefined
null - standalone value
boolean
symbol
object
*/ 
let name = "Aditi"
let age = 22
let score = 9.9
let state 
let isloggedin = true

console.log(typeof name);
console.log(typeof age);
console.log(typeof score);
console.log(typeof state);
console.log(typeof null);
console.log(typeof isloggedin);

//Objects in JS -

//Datatype Conversion in JS
let scor = "93"
let scoreinnum = Number(scor)
console.log(typeof(scoreinnum));
console.log(typeof(scor));

let val = "93abc"
let valinnum = Number(val)
console.log(typeof(valinnum));
console.log(typeof(val));
console.log(valinnum); // GIVES NaN - not a number

let value=3
let negval=-value
console.log(negval);

/*power ** 
mod %
*/

console.log("2" + 2);
//output will be 22 for type string

console.log(1+2+"2");
//output would be 32 of type string  BUT
console.log("1" + 2+2);
//output is 122

let num1,num2,num3
num1 = num2 = num3 = 2+2
console.table([num1,num2,num3]); 

//COMPARISION
console.log("2">1);
console.log("02">1);

console.log(null>0) //true
console.log(null==0) //true
console.log(null<0)

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);

console.log("2" == 2); //returns true as dataypes are not checked and conversion occurs
console.log("2" === 2);//false as now datatype is also checked


//Non Primitive or Reference dataype:
// Arrays, Objects, Function as a variables-func obj
const arr_heroes = ["shaktiman","balveer","bhim"];

let myobj = {
    name:"Aditi",
    age:22,
}

let myfunc = function(){
    console.log("Hi");
}