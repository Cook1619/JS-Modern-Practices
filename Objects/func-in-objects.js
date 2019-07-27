let myBook = {
    title: 'In the Name of the Wind',
    author: 'Patrick Rothfuss',
    pageCount: 950,
}
let otherBook = {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pageCount: 756
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let firstSummary = getSummary(myBook);
let secondSummary = getSummary(otherBook);
console.log(firstSummary.summary);
console.log(secondSummary.pageCountSummary);

//Challenge area

let takeFahrenheit = function(temp) {
    return {
        fahrenheit: `The temperature in fahrenheit is ${temp}`,
        celcius: `The temperature in celcius is ${(temp - 32) * 5/9}`,
        kelvin: `The temperature in kelvin is ${(temp + 459.67) * 5/9}`
    }
}
let fahrenheit = takeFahrenheit(32);
let celcius =  takeFahrenheit(32);
let kelvin = takeFahrenheit(32);
console.log('Fahrenheit', fahrenheit.fahrenheit);
console.log('Celcius', celcius.celcius);
console.log('Kelvin', kelvin.kelvin);


