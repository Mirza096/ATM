import inquirer from "inquirer";
async function StartATMConversation() {
    console.log("Welcome To Bank Al-Habib Limited");
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "userID",
            message: "Kindly enter your user ID",
        },
        {
            type: "number",
            name: "userPIN",
            message: "Kindly enter your PIN Code",
        },
        {
            type: "list",
            name: "accountType",
            choices: ["Current", "Saving"],
            message: "Select your accountType",
        },
        {
            type: "list",
            name: "transactionType",
            choices: ["Fastcash", "Normal Withdrawal"],
            message: "Select your transactionType",
            when(answers) {
                return answers.accountType;
            }
        },
        {
            type: "list",
            name: "amount",
            choices: [1000, 2000, 5000, 10000, 15000, 20000],
            message: "Select your Cash amount",
            when(answers) {
                return answers.transactionType === "Fastcash";
            }
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount",
            when(answers) {
                return answers.transactionType === "Normal Withdrawal";
            }
        },
    ]);
    if (answers.userID && answers.userPIN) {
        console.log("Processing your request....");
        const balance = Math.floor(Math.random() * 10000000);
        console.log("Your current balance is: PKR", balance.toLocaleString());
        const enteredAmount = answers.amount;
        if (balance >= enteredAmount) {
            const remainingBalance = balance - enteredAmount;
            console.log("Transaction is successful. Your remaining balance is PKR", remainingBalance.toLocaleString());
        }
        else {
            console.log("Insufficient balance. Please try again");
        }
    }
}
StartATMConversation();
