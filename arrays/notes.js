//Arrays are a method heavy data type with lots of different helpful methods to help us along the way

const notes = [
    {
        title: 'My next trip',
        body: 'Going to Utah'
    },
    {
        title: 'Productivity',
        body: 'Exercise. Eating better'
    },
    {
        title: 'Coding',
        body: 'Practice more frequently'
    }
];

// removes last item in the array, you can save this to a variable if needed like such
// let removedNote = notes.pop();

// //adds arguement to end of array
// notes.push('Note4');

// //removes the first item in the array, you can also save this to a variable like in using pop
// notes.shift();

// //Adds to beginning of an array
// notes.shift('Another new note');

// //splice can add or remove elements anywhere in the array, the first arguement is the index of where you want the action to happen, the second argument is the number of items you want to remove, the third argument is value you want to add 
// notes.splice(1,1)//deletes one item at index 1
// notes.splice(1,0,'New Note 2')//will add Note 2 back where we just deleted it
//checks the length of the array
// notes.forEach(function (item, index){
//     console.log(item, index)
// })

const findNote =  function (notes, noteTitle) {
    const index =  notes.findIndex(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}

const note = findNote(notes, 'My next trip')
console.log(note)

// console.log(notes.length);
// console.log(notes);

// //This method on indexes, findIndex will run on each item in the array fo objects and once it find a match, it will return the index in value which were trying to match
// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habbits to work on'
// })
// console.log(index)


