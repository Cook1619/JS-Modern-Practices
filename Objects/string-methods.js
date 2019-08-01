let name = 'Matt Cook';

//Length property
console.log(name.length);

//Convert to uppercase
console.log(name.toUpperCase());

//Convert to lowercase
console.log(name.toLowerCase());

//Checks if string includes, can search in a string, returns boolean
let password = '123abc'
console.log(password.includes('abc'));

//Trim removes extra whitespace, works well with forms
let removeSpace = '                Lets gets the whitespace outtttaa heere!!                  '
console.log(removeSpace.trim());

//Challenge area

//isValidPassword, takes one arguement
//only return true is length is more than 8, and it doesn't contain the word password

let isValidPassword = function (password) {
    if(password.length > 8 && !password.includes('password')){
        return true
    }else {
        return false
    }
}
console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%%'));
console.log(isValidPassword('ajdfggfjkdnsjshdg123password'));
