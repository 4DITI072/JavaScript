const email="@gmail.com";

if(email)
    console.log("Got user email");
else
    console.log("Dont have email");

//works as we have a value for email variable 
//THIS IS TRUTHY

//falsy val : false, 0, -0, BigIn0n, "", null, undefined, NaN

//truthy  val : "0", "false", " ", [],{}, function(){}

const arr= []
if(arr)
    console.log("Arr");
else
    console.log("Nope");

//but array is empty

if(arr.length === 0)
    console.log("Arr is empty");

const emptyObj={}
if(Object.keys(emptyObj).length === 0)
    console.log("Obj is empty");

if(false == 0 && false == "" && 0=="")
    console.log("True")

//Nullish Coalescing Operator (??) : null undefined

let val
val = 5 ?? 10;
console.log(val);
//either 5 or 10 or null

val=null ?? 10
console.log(val);

val= undefined ?? 15
console.log(val);

val= null ?? 10 ?? 10//here onbly first value is assigned ie 10

// ternary operator 
// cond ? true : false

const price=100;
(price>=100) ? console.log("More") : console.log("Less");;