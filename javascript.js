//let num1 = 10;
//let num2 = 5;
//let name = 'Miracle';

//alert( num1 + num2 );
//alert( num1 - num2 );
//alert( num1 * num2 );
//alert( num1 / num2 );

//console.log( `Hello [name], the result of num1 + num2 is{result}` );
//alert( `Hello ${name}, the result of num1 + num2 is ${num1 + num2}` );


//Question One
const accountOne = {
    accountName: "Miracle",
    accountBalance: 1000,
    accountCurrency: "USD",
    accountType:"Savings",
};

const accountTwo = {
    accountName: "Aisha",
    accountBalance: 2000,
    accountCurrency: "USD",
    accountType:"Savings",
};

const accountThree = {
    accountName: "Kenzie",
    accountBalance: 3000,
    accountCurrency: "NGN",
    accountType:"Checking",
};

const accountFour = {
    accountName: "Bisola",
    accountBalance: 4000,
    accountCurrency: "USD",
    accountType:"Checking",
};

//Question two
// Deposit into accountOne
let deposit = 1000
accountOne.accountBalance = Number(accountOne.accountBalance) + deposit;
console.log(accountOne.accountBalance);

// New deposit for accountFour
deposit = 3000;
accountFour.accountBalance = Number(accountFour.accountBalance) + deposit;
console.log(accountFour.accountBalance);

//Question three
//Stimulate Withdrawls
let withdrawlMoney1 = 4000
accountOne.accountBalance = Number(accountOne.accountBalance) - withdrawlMoney1;
if(accountOne.accountBalance >= withdrawlMoney1){
    accountOne.accountBalance -= withdrawlMoney1
    console.log(`Withdrawl sucessful. New balance:accountOne.accountBalance`);
}
else{
    console.log(`Insufficient funds`);
}

let withdrawalMoney = 2000
accountFour.accountBalance = Number(accountFour.accountBalance) - withdrawalMoney;
if(accountFour.accountBalance >= withdrawalMoney){
    console.log(`Withdrawlsucessful. Newbalance, ${accountFour.accountBalance}`);
}
else{
    console.log(`Insufficient funds`);
}

//Question four
let transferMoney = 2000
accountFour.accountBalance = Number(accountFour.accountBalance) - transferMoney;
accountThree.accountBalance = Number(accountThree.accountBalance) + transferMoney;
if(accountFour.accountCurrency === accountThree.accountCurrency){
     console.log(accountThree.accountBalance)
}
else{
    console.log(`Currency mismatch`)
};

transferMoney = 2000
accountFour.accountBalance = Number(accountFour.accountBalance) - transferMoney;
accountTwo.accountBalance = Number(accountTwo.accountBalance) + transferMoney;
if(accountFour.accountCurrency === accountTwo.accountCurrency){
     console.log(accountTwo.accountBalance)

}
else{
    console.log(`Currency mismatch`)
};


//Question five
if(accountOne.accountType === "Savings"){
    (accountOne.accountType === "Checking")
    let intrest  = 0.02 * accountOne.accountBalance;
    let newBalance = +accountOne.accountBalance + intrest
    console.log(`intrest added. Newbalance, ${newBalance}`)
}
else{
    let feeDeducted = accountOne.accountBalance -= 50;
    newBalance = feeDeducted
    console.log(`Fee deducted. Newbalance, ${newBalance}`)
}

if(accountFour.accountType === "Savings"){
    (accountFour.accountType === "Checking")
    let intrest  = accountFour.accountBalance * 0.02;
    accountFour.accountBalance + intrest
    console.log(`intrest added. Newbalance, ${accountFour.accountBalance}`)
}
else{
    let feeDeducted = accountFour.accountBalance - 50;
    newBalance = feeDeducted
    console.log(`Fee deducted. Newbalance, ${newBalance}`)
}

//Question six
if(accountOne.accountBalance >= accountTwo.accountBalance){
    if(accountOne.accountBalance >= accountThree.accountBalance){
        if( accountOne.accountBalance >=accountFour.accountBalance){
            console.log(`accountOne has the highest balance`)
        }
    }  
}
else{
    console.log(`accountOne.accountBalance had the lowest balance`)
}

if(accountTwo.accountBalance >= accountOne.accountBalance){
    if(accountTwo.accountBalance >= accountThree.accountBalance){
        if( accountTwo.accountBalance >= accountFour.accountBalance){
            console.log(`accountTwo has the highest balance`)
        }
    }  
}
else{
    console.log(`accountTwo.accountBalance had the lowest balance`)
}

if(accountThree.accountBalance >= accountOne.accountBalance){
    if(accountThree.accountBalance >= accountTwo.accountBalance){
        if( accountThree.accountBalance >= accountFour.accountBalance){
            console.log(`accountThree has the highest balance`)
        }
    }  
}

if(accountFour.accountBalance >= accountOne.accountBalance){
    if(accountFour.accountBalance >= accountThree.accountBalance){
        if( accountFour.accountBalance >= accountTwo.accountBalance){
            console.log(`accountFour has the highest balance`)
        }
    }  
}
else{
    console.log(`accountFour.accountBalance had the lowest balance`)
}

//Question seven
if(accountOne.accountBalance > 0){
    console.log("Active")
}

if(accountOne.accountBalance === 0){
    console.log("Empty")
}

if(accountOne.accountBalance < 0){
    console.log("Overdrawn")
}


if(accountTwo.accountBalance > 0){
    console.log("Active")
}

if(accountTwo.accountBalance === 0){
    console.log("Empty")
}

if(accountTwo.accountBalance < 0){
    console.log("Overdrawn")
}

if(accountThree.accountBalance > 0){
    console.log("Active")
}

if(accountThree.accountBalance === 0){
    console.log("Empty")
}

if(accountThree.accountBalance < 0){
    console.log("Overdrawn")
}

if(accountFour.accountBalance > 0){
    console.log("Active")
}

if(accountFour.accountBalance === 0){
    console.log("Empty")
}

if(accountFour.accountBalance < 0){
    console.log("Overdrawn")
}

//Bonus Question
const accountFive = {
    accountName: "Rose",
    accountBalance: 10000,
    accountCurrency: "EUR",
    accountType: "Savings",
};

let transferAmount = 4000
accountFive.accountBalance = Number(accountFive.accountBalance) - transferAmount;
accountThree.accountBalance = Number(accountThree.accountBalance) - transferAmount
if(accountFive.accountCurrency === accountThree.accountCurrency){
     console.log(accountFive.accountBalance)
}
else{
    console.log(`Currency mismatch`)
};

let exchangeRate = 1400/1; //1EUR = 1400NGN
let amountInEUR = 3000;
let amountInNGN = amountInEUR * exchangeRate
if(accountFive.accountBalance >= amountInEUR){
    accountFive.accountBalance -= amountInEUR
    console.log(`Transfer sucessful ${amountInNGN}`)
    console.log(`balance ${accountFive.accountBalance - amountInEUR}`)
}
else{
    console.log(`Insufficient funds`)
};
