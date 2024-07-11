if(true){
    console.log("Hi Aditi");
}
//always runs;



function Greater( a , b){
    if(a>b)
        return a;
    else
    return b;
}

console.log(Greater(5,9)+ " is greater.");
console.log(`${Greater(5,9)} is greater.`);

if(2=="2")
    console.log("Equal");
if(2==="2")
    console.log("Equal");
else
    console.log("Not Equals");

    // == dont compare data types === compares data typed too

const score = 200

if(score>100){
    const power="fly";
    console.log(`User Power ${power}`);
}

//without defining scope multiline code
const balance=501;
if(balance>=500) console.log("Good balance"),
console.log("Amir ho aap");
//not recommended

const a=5,b=4,c=0;

if(a>b && a>c)
    console.log("A is greatest");
else if (b>a && b)
    console.log("B is greatest");
else
    console.log("C is greatest");

