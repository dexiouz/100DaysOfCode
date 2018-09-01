//use rest param in functions 
function convertCurrency(rate, ...amounts){
  return amounts.map(amount => amount*rate);
}

const amoun = convertCurrency(1.54, 10,34,56, 67,75);
console.log(amoun)

//using in destructuring cases
const runner = ['Chidera Paul', 123, 6.7,8,5,9,7]
const [name, id, ...runs] =  runner;
console.log(name, id,runs)//Chidera Paul 123 [ 6.7, 8, 5, 9, 7 ]

const team = ['Chidera', 'Paul','chika','john', 'Grace']
const [captain, assistant, ...players] = team;
console.log(captain, assistant,players)//Chidera Paul [ 'chika', 'john', 'Grace' ]