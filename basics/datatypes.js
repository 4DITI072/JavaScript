//Primitives : 
/*
Strings : single or double quotes
numbers
undefined - when let name; : so initial value will be undefined
null - standalone value (undefined when no value is assigned : null is representation of empty : let state = null : let temp; : temp=undefined degrees)
boolean - true or false
symbol : to find uniqueness
object : 
*/ 
let name = "Aditi"
let age = 22
let score = 9.9
let state 
let isloggedin = true

console.log(typeof name); //--> string 
console.log(typeof age);  // number
console.log(typeof score); 
console.log(typeof state);
console.log(typeof null); //object but undefined is undefined
console.log(typeof isloggedin);

//Objects in JS -

//Datatype Conversion in JS
let scor = "93"
let scoreinnum = Number(scor)
console.log(typeof(scoreinnum));  //--> NaN : not a number for undefined also. but for null : 0 ; true =1 , false = 0 
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
//output is 122 - hence js always works from left to right : remember that

console.log(+true); //-->  1
console.log(+"");   //-->  0


let num1,num2,num3
num1 = num2 = num3 = 2+2
console.table([num1,num2,num3]); 

//COMPARISION
console.log("2">1);
console.log("02">1);

console.log(null>0) //false
console.log(null==0) //false
console.log(null<=0) //true
// comparisons convert null to 0 but equality check does not  

console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined<0); //true

console.log("2" == 2); //returns true as dataypes are not checked and conversion occurs
console.log("2" === 2);//false as now datatype is also checked -- strict check


//Non Primitive or Reference (Non Primitive) dataype: based on how the data is kept in memory

//symbols :
const id = Symbol('123')
const another_id = Symbol('123')

console.log(id === another_id)  // false

//BIG INT:
const bignum = 12345678905689n // : bigint

// Arrays, Objects, Function as a variables-func obj
const arr_heroes = ["shaktiman","balveer","bhim"];

//objects : 
let myobj = {
    name:"Aditi",
    age:22,
}


//function as a variable: 
let myfunc = function(){
    console.log("Hi");
}
//using type of to get datatype : 
// null is type of object : 
// undefined is undefined :  
// object is function : 
// function is obj function
