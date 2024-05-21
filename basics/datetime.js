let date=new Date()
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(typeof date);

let createdDate= new Date(2023, 0 , 23);//count starts form 0
console.log(createdDate.toDateString());

let createdDate1= new Date("2023-12-3");//count starts from 1
console.log(createdDate1.toLocaleString());

let d=new Date("1/12/2023")
console.log(d.toLocaleString());

let ts= Date.now()
console.log(Math.floor(Date.now()/1000));
//console.log(ts.getTime());

//'${d.getDay{}}' 