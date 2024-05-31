#!/usr/bin/env node
// Typescript Project Quiz System
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellowBright("Welcome to Shaheen Quiz System"));
console.log(chalk.yellowBright("You are required to gain a minimum of 4 points to win."));
let points = 0;
const questions = [
    {
        name: "one",
        message: "TypeScript is a superset of?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        correct: "JavaScript"
    },
    {
        name: "two",
        message: "Capital of Pakistan?",
        choices: ["Karachi", "Punjab", "Islamabad", "KPK"],
        correct: "Islamabad"
    },
    {
        name: "three",
        message: "Which is the largest city in Pakistan?",
        choices: ["Lahore", "Islamabad", "Karachi", "Multan"],
        correct: "Karachi"
    },
    {
        name: "four",
        message: "In which province is Karachi located?",
        choices: ["Sindh", "Punjab", "Balochistan", "KPK"],
        correct: "Sindh"
    },
    {
        name: "five",
        message: "What is the file extension for TypeScript files?",
        choices: [".js", ".css", ".html", ".ts"],
        correct: ".ts"
    },
    {
        name: "six",
        message: "Who is the founder of Pakistan?",
        choices: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Sir Syed Ahmed Khan"],
        correct: "Quaid-e-Azam"
    },
    {
        name: "seven",
        message: "What is the official language of Pakistan?",
        choices: ["Sindhi", "Punjabi", "Urdu", "English"],
        correct: "Urdu"
    }
];
for (const question of questions) {
    const answer = await inquirer.prompt([
        {
            name: question.name,
            message: chalk.blueBright(question.message),
            type: "list",
            choices: question.choices
        }
    ]);
    if (answer[question.name] === question.correct) {
        console.log(chalk.greenBright("Your answer is correct!"));
        points++;
    }
    else {
        console.log(chalk.redBright("Your answer is incorrect!"));
    }
}
if (points >= 4) {
    console.log(chalk.greenBright("Congratulations!"));
    console.log(chalk.greenBright(`Your points: ${points}`));
}
else {
    console.log(chalk.redBright("You lost! Try next time."));
    console.log(chalk.redBright(`Your points: ${points}`));
}
