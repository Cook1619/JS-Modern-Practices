let myBook = {
    title: 'In the Name of the Wind',
    author: 'Patrick Rothfuss',
    pageCount: 950
}
console.log(myBook);//prints whole object
console.log(myBook.title)//access a value in an object, this is call dot notation
console.log(myBook['title'])//same thing, this is called bracket notation
myBook.pageCount =  300 //reassigns a value in object
console.log('Page count ' + myBook.pageCount)
myBook.yearRealesed = 2002
console.log('Year released ' + myBook.yearRealesed);//Adds a property and value onto object


//Challenge area

let person = {
    name: 'Matt',
    age: 32,
    location: 'Mayer, MN'
}

console.log(`${person.name} is ${person.age} and live in ${person.location}`);
person.age++//same thing as person.age + 1
console.log(`${person.name} is ${person.age} and live in ${person.location}`);