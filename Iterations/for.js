// for loop
const n=10
for (let index = 1; index <= n; index++) {
    console.log(index);
}
for (let index = 1; index <= n; index++) {
    console.log(index+" ");
}

//nested kloops

for(let i=2;i<=5;i++){
    console.log(`Table of ${i}`);
    for(let j=1;j<=10;j++)
        console.log(`${i} * ${j} = ` + i*j);
}

//BREAK AND CONTINUE