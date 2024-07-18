/**
 * Promise is an obj represents eventual 
 * completion/failure of async oprn & 
 * its resulting val
3 states : 
pending 
fullfill
rejected

mostly consumed not created

promise creation in ES6 -  it has lib : Q and Bluebird
fetch
 */

//PROMISE CREATION :
const promise1=new Promise(function(resolve,reject){
    //do an asyn task
    //db calls , cryptography , network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

//resolve and .then not connected - resolve() connects them
promise1.then(function(){
    console.log('promise consumed');
})


//OPTIMIZED
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asysnc task 2');
        resolve();

    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username: "Aditi", password:"123" })
        }else{
            reject('error: something went wrong')
        }
    },1000)
})

//chaining - 
promise4
.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or rejected"));

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"JS",password:"123"})
        }else{
            reject('error: js went rogue');
        }
    },1000)
});

//async await approach for promises:

async function consumePromise5(){
    try{
    const resp= await promise5
    console.log(resp);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise5()

async function getAllUsers(){
    const resp=await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await resp.json()
    console.log(data);
}

getAllUsers()

//Another Method:

fetch('https://jsonplaceholder.typicode.com/users')
.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
 