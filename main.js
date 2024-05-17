#!/user/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let iscontinue = true;
const mypincode = 2345;
const message = "welcome to ATM";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Enter your pin code",
});
if (pin_ans.ans === 2345) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "select my option",
            choices: ["withdraw", "deposit", "fast cash", "exit"]
        });
        /////////..........Deposit...................
        if (ans.list === "deposit") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposit_amount",
                message: "please Enter your amount: "
            });
            if (ans.Deposit_amount > 0) {
                myBalance = myBalance + ans.Deposit_amount;
                console.log(myBalance);
            }
        }
        ////     .................witdraw.............
        else if (ans.list === "withdraw") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "withdraw_amount",
                message: "please Enter your amount: "
            });
            if (ans.withdraw_amount <= myBalance) {
                myBalance = myBalance - ans.withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("not enough money");
            }
        }
        ////.................fast cash...............
        else if (ans.list === "fast cash") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "fast cash",
                message: "select your amount",
                choices: ["500", "1000", "2000"]
            });
            if (ans.fast_cash <= myBalance) {
                if (ans.fast_cash === "500") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
                else if (ans.fast_cash === "1000") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
                else if (ans.fast_cash === "2000") {
                    myBalance -= ans.fast_cash;
                    console.log(myBalance);
                }
            }
        }
        ///....................... check balance...............
        else if (ans.list === "check balance") {
            console.log("your balance is: " + myBalance);
        }
        //.....................while condition.................
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "do you want to continue"
        });
        if (while_ans.condition === false) {
            iscontinue = false;
        }
    } while (iscontinue);
}
else {
    console.log("ivalid pincode");
}
