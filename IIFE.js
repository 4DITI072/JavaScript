//IMMIDIATELY INVOKED FUNCTION EXPRESSION

function chai(){
    console.log('DB Connected without iife');
}

chai();
//to work we have to call this fucntion but not in iife

(function chai(){
    console.log('DB Connected');
})();
//How to pass parameter in noname iife
( (name) => {
    console.log(`DB Connected 2 ${name}`);
})("Aditi")

//More than 1 iife should be seperated by ; (EXPLICITLY)

