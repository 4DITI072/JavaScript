//when amt of parameter are unknown
function calcCartPrice(...num){//rest operator not spread
    sum=0
    for(i=0;i<num.length;i++){
        sum+=num[i]
    }
    console.log(sum);
}
//rest operator takes input as array
calcCartPrice(200,300,400)
const obj={
    name:"aditi",
    price: 99
}
function handleObj(anyobj){
    console.log(`username is ${anyobj.name} & price is ${anyobj.price}`);
}
handleObj(obj)
handleObj({
    name:"hitesh",
    price:12
})