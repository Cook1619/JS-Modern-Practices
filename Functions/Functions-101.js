//Function - input (arguement), code, output - (return value)

let greetUser = function () {
    console.log('Hello')
}
greetUser();

let square = function (number) {
    let result =  number * number
    return result
}
let value = square(6);
console.log(value);
letOtherValue = square(10);
console.log(letOtherValue);

//Challenge

// convert f to c

let convertFtoC = function (temp) {
    let result = (temp - 32) * 5/9;
    return result;
}

let firstConversion = convertFtoC(32);
console.log(firstConversion);
let secondConversion = convertFtoC(68);
console.log(secondConversion);