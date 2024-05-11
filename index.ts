import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter number of seconds!",
    validate : (input)=>{
        if(isNaN(input)){
            return "Please enter valid number!"
    } else if(input > 60){
        return "Seconds must be less or equal to 60"
    }else {return true;}}
});
let input = res.userInput
function startTime(val:number){
    const iniTime = new Date().setSeconds(new Date().getSeconds() +val);
    const intervalTime = new Date(iniTime);
    setInterval(()=> {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime , currentTime);
       if(timeDiff <=0){
        console.log("Time is over!");
        process.exit();
       }
       const min = Math.floor((timeDiff % (3600*24))/3600)
       const sec = Math.floor(timeDiff % 60)
       console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    },1000)
}
startTime(input);
//const date = new Date()
//console.log(date);

