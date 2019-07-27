let myAccount = {
    name: 'Mathew Cook',
    expenses: 0,
    income: 0
}

let otherAccount =  myAccount;


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}

//Add income to account
let addIncome = function (account, addedIncome) {
    account.income = account.income + addedIncome
}
//resetAccount
let resetAccount =  function (account) {
    account.expenses = 0;
    account.income = 0;
}

//getAccountSummary
let getAccountSummary =  function (account) {
    let balance =  account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income.`
}

addIncome(myAccount, 100);
addIncome(myAccount, 400);
addIncome(myAccount,1200);
addExpense(myAccount,700);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
