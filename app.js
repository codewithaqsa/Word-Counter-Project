//Word Counter Project by Aqsa Muneer Khan
//inquirer
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sent",
        type: "input",
        message: "Enter your sentence to count the given words:"
    }]);
//output defined
const words = answer.sentence.split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
