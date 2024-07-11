const option=2;

switch(option) {
    case 1:
        console.log("Sun");
    case 2: 
        console.log("Mon");
    case 3:
        console.log("tues");
    default:
        console.log("Any other day");
}

//as no break so every statement after true is print except default

const opt="May";

switch(opt) {
    case "apr":
        console.log("apr");
        break
    case "jan": 
        console.log("jan");
        break
    case "May":
        console.log("May");
        break
    default:
        console.log("Any other month");
}
//no need for brk after default