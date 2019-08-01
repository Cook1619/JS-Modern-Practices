const todos = ['Walk dog', 'Go to work', 'Cook dinner', 'Play with baby'];

todos.splice(2,1);
todos.push('Wash dishes')
todos.shift();

console.log(`You have ${todos.length} todos!`);
console.log(todos)
// console.log(todos[todos.length -1], todos[todos.length -2])

