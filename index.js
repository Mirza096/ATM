import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 1111;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin number",
    type: "number",
});
if (pinAnswer.pin === pinCode) {
    console.log(`Choose your next step`);
}
else {
    console.log(`Incorrect Pin code`);
    process.exit(0);
}
let operationTypes = await inquirer.prompt([{
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fastcash"],
    }]);
if (operationTypes.operation === "withdraw") {
    let withdrawAmount = await inquirer.prompt([
        {
            name: "amount",
            message: "Please enter amount",
            type: "number"
        },
    ]);
    if (withdrawAmount.amount > myBalance) {
        console.log(`Your balance is insufficient`);
    }
    if (withdrawAmount.amount <= myBalance) {
        myBalance -= withdrawAmount.amount;
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else if (operationTypes.operation === "check balance") {
    console.log(`Your balance is ${myBalance}`);
}
if (operationTypes.operation === "fastcash") {
    let fastcashAmount = await inquirer.prompt([
        {
            name: "fastamount",
            message: "Please enter amount",
            type: "list",
            choices: ["2000", "5000", "10000"],
        },
    ]);
    if (parseInt(fastcashAmount.fastamount) === 2000) {
        myBalance -= 2000;
        console.log(`Your balance is ${myBalance}`);
    }
    else if (parseInt(fastcashAmount.fastamount) === 5000) {
        myBalance -= 5000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (parseInt(fastcashAmount.fastamount) === 10000) {
        myBalance -= 10000;
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
