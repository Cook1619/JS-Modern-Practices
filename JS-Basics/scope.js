// lexical scoping (Static scope)
// GLobal scope -  Defined outside of all code blocks
// Local scope - Defiend inside a code block

// In a scope you can access variables defined in that scope, or any parent/ancestor scope

// Global scope(varOne)
  //Local scope(varTwo)
   //Local scope (varFour)
  //Local scope(varThree)
let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);
    
    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree';
}

console.log(varTwo);