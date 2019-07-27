//Undefined for variable

let name ;

let firstName;

console.log(firstName);

if (name === undefined){
    console.log('Name is never given a value!!!')
}else {
    console.log(name);
}

//Undefined for function arguements
//Undefined as the function return default value
let square = function (num) {
    console.log(num)
}

let result = square();
console.log(result);


//When we see undefined we know it was a language default, when we se null we know it was explicitly assigned the null value, typically to clear a form
//Null as assigned value

let age = 23;
console.log(age);
age = null;
console.log(age);




