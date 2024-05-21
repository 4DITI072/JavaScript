function saymyname(){
    console.log("Aditi");
}

saymyname;//not executted
saymyname();//executed

function add2no(num1,num2){//func def so parameter
    console.log(num1+num2);
}
add2no(3,4)//here args-at func call
add2no(3,"4")//automatic conversion
add2no(3,"a")
add2no(3,null)
const res= add2no(5,5)//but funs doesnt returns but runs
console.log(res);

function add(a,b){
    let res=a+b
    return res
}
const result= add(5,5)
console.log("result : ", result);

function userloginmsg(username = "sam"){//default parameter
    if(username===undefined || !username)
        {
            console.log("please enter username");
            return
        }
    return `${username} just logged in`
}
const msg=userloginmsg("aditi")
console.log(msg);
const undi=userloginmsg()
console.log(undi);