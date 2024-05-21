let a=10
const b=20
var c=30 //its scope is whole program

console.log(a)
console.log(b);
console.log(c);
// curly braces is scope

if(true){
    const d=20
    let a=15
    console.log(a)//local over global
}
//console.log(d);         shows error

