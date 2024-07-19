function mulby5(num){
    return num*5;
}

mulby5.power=2
console.log(mulby5(5));
console.log(mulby5.power);
console.log(mulby5.prototype);

function createUser(username,score){

    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printME=function(){
    console.log(`score is ${this.score}`);
}

const chai =new createUser("chai", 25);
const tea=new createUser("tea",250);

chai.printME();
tea.increment();
tea.printME();