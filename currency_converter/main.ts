#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n \tWelcome To Moiz Ahmed Sahikh - Currency Convertor App\n"));


const currency: any = {
  USD: 1, //Base value
  PAK: 277,
  IND: 83.23,
  UAE: 3.5,
  EUR: 0.9,
  CHN : 7.23,
  TUR : 32.19
};

let answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from Currency",
    type: "list",
    choices: ["USD", "PAK", "IND", "UAE", "EUR", "CHN", "TUR"],
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD", "PAK", "IND", "UAE", "EUR", "CHN", "TUR"],
  },
  {
    name: "amount",
    message: "Enter your Amount",
    type: "number",
  },
]);

let fromAnswer = currency[answer.from]; 
let toAnswer = currency[answer.to];
let amountAnwser = answer.amount;
let baseAmount = amountAnwser / fromAnswer; 
let convertAmount = baseAmount * toAnswer;
console.log(chalk.gray(`Converted Amount = ${chalk.red(convertAmount.toFixed(2))}`));
