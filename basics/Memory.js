/*
2 types of memories in js:
Stack-primitive only copy is send
 and Heap-reference/nonprimitive reference to var is sent. 
*/

let name = "Aditi"
let anothername = name

anothername = "Ananya"

console.log(name); //Aditi as only copy was sent so no change in original
console.log(anothername);

let user = {
    email:"adgmail.com",
    upi:"oksbi",
}

let user2 = user

user2.email = "user@gmail.com"

console.log(user);
console.log(user2);
//both are changed
