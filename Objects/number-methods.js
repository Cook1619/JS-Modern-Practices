let num = 103.456;

//shows 2 decimal places, changes based on argument you put in
console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

//Generates a random number
let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

//Challenge area
// 1-5 true if correct, false if not correct

let randomNumber= function (guess) {
    let min = 1;
    let max = 5;
    let rando = Math.floor(Math.random() * (max-min + 1)) + min;
    // if (guess === rando){
    //     return true;
    // }else {
    //     return false;
    // }
    //this is a shorthand for the if statement above
    return guess === rando
}

console.log(randomNumber(4));

