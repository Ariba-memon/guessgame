#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(" Welcome to Ariba Guess Game");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.blue`   
    .d88b. 888  888 .d88b. .d8888b .d8888b  .d88b.  8888b. 88888b.d88b.  .d88b.  
    d88P"88b888  888d8P  Y8b88K     88K     d88P"88b    "88b888 "888 "88bd8P  Y8b 
    888  888888  88888888888"Y8888b."Y8888b.888  888.d888888888  888  88888888888 
    Y88b 888Y88b 888Y8b.         X88     X88Y88b 888888  888888  888  888Y8b.     
     "Y88888 "Y88888 "Y8888  88888P' 88888P' "Y88888"Y888888888  888  888 "Y8888  
         888                                     888                              
    Y8b d88P                                Y8b d88P                              
     "Y88P"                                  "Y88P"
          
    `);


}

await welcome()
function new1() {
    console.log(chalk.green("Select Any Number From 1 to 100"))
   
}
new1()



let numGenerate :number=   Math.floor(Math.random()*10);


const userInput = await inquirer.prompt([{
    name: 'userInput', type: "number", message: (chalk.white("Please enter a number ")),
    
    
}])


    function match(input:Number){
    
        if(numGenerate === input){
        console.log(chalk.blue("Hurry!! You guess the right num "))
        } else{
            console.log(chalk.red("Opps... Better luck next time"))
        }
    }

 match(userInput.userInput)
function new2(){
    console.log(chalk.underline.yellow(`Correct is ${numGenerate}`))
}
await new2()



