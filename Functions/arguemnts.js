//Functions with multiple arguements

let add = function (num1, num2) {
    return num1 + num2
}

let result = add(10,1);
console.log(result);

//Functions with arguments defaults, in case parameters aren't called into the function call these will be used

let getScoreText = function (name = 'Matt', score = 100) {
    return `Name: ${name}  - Score: ${score}`
}
//if you want to assign a value to the second argument, you need to provide undefined as the first argument, then the number you want to assign
let scoreText = getScoreText('Bill', 70);
console.log(scoreText);

//Challenge Area

let tipCalculator = function (total, percentTip = .2) {
    return `Your tip will be: ${total * percentTip}$$`
}

let tipResult = tipCalculator(100, .1);
console.log(tipResult);


