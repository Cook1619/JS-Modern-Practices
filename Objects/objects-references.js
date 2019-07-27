let myAccount = {
    name: 'Mathew Cook',
    expenses: 0,
    income: 0
}

let otherAccount =  myAccount;


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}

addExpense(myAccount, 2.50);
console.log(myAccount);