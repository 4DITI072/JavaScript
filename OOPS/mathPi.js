const myobj={username: "username"};

console.log(Math.PI);
Math.PI=5
console.log(Math.PI);

//doesnt chnge

const descripter=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descripter);

/**3.141592653589793
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

const chai={
    name: 'ginger chai',
    price: 25,
    isAvail: true,

    orderChai: function(){
        console.log("Chai fatt gyi");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

/*Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
});
*/

for(let [key,val] of Object.entries(chai)){
    if(typeof val != 'function')
    console.log(`${key} : ${val}`);
}

//no enumerable no loop on object
