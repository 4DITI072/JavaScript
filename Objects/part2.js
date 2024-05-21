const user=new Object()
//or
const tuser={}
console.log(user);
console.log(tuser);

tuser.id="23ab"
tuser.name="Aditi"
tuser.login=true

console.log(tuser);
const regular={
    email:"ad@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aditi",
            lastname: "Kaushal"
        }
    }
}
console.log(regular.fullname?.userfullname);//?to check if present

const obj={tuser,regular}//obj k andar obj
console.log(obj);
const obj1 = Object.assign({}, tuser, regular)
console.log(obj1);

const obj2= { ...tuser, ...regular}
console.log(obj2);

const multipleusers=[
    {
        id:1,
        email: "@google.com"
    },
    {
        id:1,
        email:"@google.com"
    },
    {
        id:1,
        email:"@google.com"
    },
    {
        id:1,
        email:"@google.com"
    }
]
console.log(multipleusers[1].email);
console.log(Object.keys(regular));
console.log(Object.values(regular));
console.log(Object.entries(regular));

console.log(tuser.hasOwnProperty('login'));

