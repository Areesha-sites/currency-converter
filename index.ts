#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";

// Define the currency conversion rates
const currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280
};

// Display welcome message using figlet
console.log(chalk.cyan(figlet.textSync("Currency Converter")));

// Start the spinner
const spinner = ora("Initializing...").start();
setTimeout(async () => {
    spinner.stop();
    // Prompt the user for conversion details
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: chalk.magenta("Enter from currency"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"]
        },
        {
            name: "to",
            message: chalk.magenta("Enter to currency"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "IND", "PKR"]
        },
        {
            name: "amount",
            type: "number",
            message: chalk.green("Enter your amount"),
        }
    ]);

    // Perform the currency conversion
    let fromAmount = currency[userAnswer.from];
    let toAmount = currency[userAnswer.to];
    let amount = userAnswer.amount;
    let baseAmount = amount / fromAmount;    // Convert to base currency (USD)
    let convertedAmount = baseAmount * toAmount; // Convert to target currency

    // Display the converted amount
    console.log(chalk.blue(`Converted Amount: ${convertedAmount}`));
}, 2000);
