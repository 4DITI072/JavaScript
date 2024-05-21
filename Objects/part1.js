//OBJ LITERAL
const sys=Symbol("key")
const obj = {
    name: "Aditi",
    [sys]:"key",
    age: 18,
    isloggedin: true,
    day:["mon","wed"]
}
console.log(obj.name);
console.log(obj["name"]);//object as key-val pairs
console.log(obj[sys]);
console.log(typeof(sys));
obj.age=20
obj.greet=function(){
    console.log("hi");
}
obj.greet2=function(){
    console.log(`hi, ${this.name}`);
}
console.log(obj);
Object.freeze(obj)//no changes can be done to obj now.
obj.name="kia"
console.log(obj);
console.log(obj.greet);
console.log(obj.greet());
console.log(obj.greet2());

