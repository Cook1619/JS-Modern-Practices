//Global (name - 'Matt')
    //local (name - 'Mike')
        //local
    //local

// In different scopes you can indeed have the same variable names

//let name = 'Matt';

if (true) {
    //let name = 'Mike'
    if (true) {
        name = 'Jen' //when name isn't declared anywhere in the program, this will leak to the global scope
        console.log(name); //Mike
    }
}

if (true) {
    console.log(name); //Matt
}