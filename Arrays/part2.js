const myarr=[1,2,3,4,5]
const hero=["DC","Thor","Flash"]
myarr.push(hero)
console.log(myarr);//puts array in an array
console.log(myarr.length);

const all= hero.concat(myarr)//concat return new arr
console.log(all);

//but more easy is spread
const allnew=[...myarr,...hero]
console.log(allnew);

const ran=[1,2,3,[4,5,6],1,[6,7,[4,5]]]
const realran=ran.flat(Infinity)
console.log(realran);

console.log(Array.isArray("Aditi"));
console.log(Array.from("Aditi"));//converts to arr
console.log(Array.from({name: "aditi"}));//interesting-give keys

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));

