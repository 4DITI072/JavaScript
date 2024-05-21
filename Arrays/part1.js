//ARRAYS
const myarr=[1,2,3,4,5,"Aditi",true]

const hero=  ["DJ"]

const arr=new Array(0,1,2,3,4,5)

console.log(myarr[0]);

hero.push("Superman");
hero.push("Taylor")
console.log(hero);
hero.pop();
console.log(hero);

myarr.unshift(0)//inserts at the beginning so whole arr is shifted
console.log(myarr);

myarr.shift();//removes 1st ele
console.log(myarr);

console.log(arr.includes(0));
console.log(arr.indexOf(9));

const newarr= myarr.join()
console.log(newarr);
console.log(typeof(newarr));//binds & converts to String

//slice & splice
console.log("A", myarr);

const my=myarr.slice(1,3)//like substring
console.log(my);
console.log("B",myarr)
const my1=myarr.splice(1,3)
console.log(my1);
console.log(myarr);
//Splice manipulated original arr
