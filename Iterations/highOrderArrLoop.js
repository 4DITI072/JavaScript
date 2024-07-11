// loops exclusively for Array

//for of loop
const arr=[1,2,3,4,5]
for(const i of arr)
    console.log(i);

const str="Aditi"
for(const i of str)
    console.log(i);

//MAPS - holds key-val pairs - no duplicates
const map=new Map();
map.set("Aditi", 7);
map.set("Aa",9);
//order is restored

for(const key of map)
    console.log(map.get(key));//prints(undefined)

for(const key of map)
    console.log(key);//whole of map is printed

//but to print pairs
for(const[key,value] of map)
    console.log(key,value);


//OBJECT
const obj={
    1:"aditi",
    2:"Anna"
}
//but obj is not iterable-by for of.
//FOR IN LOOPS
for(const key in obj)
    console.log(obj[key]);

for(const i in arr){
    console.log(i);//this will print index-keys only
    console.log(arr[i]);//actual element
}

for (const i in map)
    console.log(i);//maps not iterable in for-in

//forEach loop
arr.forEach( function (item) {
    console.log(item*2);
})
//function in foreach has no name-callback func

arr.forEach( (item)=> {
    console.log(2*item);
})
//arrow func in forEach

//arr.forEach(printMe)//here print me is a fuinc

arr.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const arrOFObj=[
    {
        name:"JS"
    },
    {
        name:"Py"
    },
    {
        name:"Java"
    }
]
arrOFObj.forEach((item)=> {
    console.log(item.name);
})