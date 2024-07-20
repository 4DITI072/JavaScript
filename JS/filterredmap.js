const nums=[1,2,3,4,5,6,7,8,9]

const newnums=nums.filter( (num)=> num <5)
console.log(newnums);

const newnum=nums.filter( (num) => {
    return num > 6 // writing return is very important as scope is open
})
console.log(newnum);

const arr=[]
nums.forEach( (num)=> {
    if(num>3){
        arr.push(num)
    }
})
console.log(arr);

const books=[
    {
        title:"book1",
        genre:"history"
    },
    {
        title:"book2",
        genre:"history"
    },
    {
        title:"book3",
        genre:"story"
    },
    {
        title:"book4",
        genre:"story"
    },
    {
        title:"book5",
        genre:"story"
    },
    {
        title:"book6",
        genre:"scifi"
    }
]

const histbooks=books.filter( (book)=> book.genre ==="history")
console.log(histbooks);


//MAP function

const arr1=[1,2,3,4,5]
const newarr=arr1.map( (num)=> {return num+10})
console.log(newarr);

//also by foreach

//nested by map - chaining 
const newarr1=arr1.map( (num)=> {return num+10}).map( (num)=> num*10)
console.log(newarr1);

//reduce function-for sum of a series
/**
 * syntax
 * const initial=i
 * const sum=arr.reduce( (accumulator, currentval) => accumulator+currentval, initial);
 */
const mynum=[1,2,3]
//const intial=0;
const sum=mynum.reduce(function (acc,curr){
    return acc+curr;
},0)//for initial
console.log(sum);

//by arrow function
const sun=mynum.reduce( (acc,curr)=> acc+curr,0)
console.log(sun);


