const num=123.8966
console.log(num.toPrecision(4));
console.log(num.toLocaleString('en-IN'));//default is us
console.log(num.toFixed(1));

//MATHS-default library//
console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(5.3));
console.log(Math.ceil(5.3));
console.log(Math.floor(5.3));
console.log(Math.sqrt(4));
console.log(Math.pow(2,2));

console.log(Math.random());//val btw 0 and 1
console.log((Math.random()*10) + 1);
//to get values in a range
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min + 1)) + min);//floor to get min