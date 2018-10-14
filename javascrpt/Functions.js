// function calculateYearOfBirth( name,currentYear, age ) {
//   let yearOfBirth = currentYear - age;
//   console.log(`${name} your year of birth is ${yearOfBirth}` );
// }

// calculateYearOfBirth('Chidera', 2018, 13 )
// calculateYearOfBirth('Paul', 2018,  )

function aNewFunction() {
  let age = 18;
  console.log( age ) 
}
// aNewFunction()  // 18 ; the variable age is visible inside the function

// Now lets call the age outside of the function
// console.log( age )  // ReferenceError: age is not defined


function aSecondFunction() {
  let myName = 'Chidera'
}
// aSecondFunction()

//  lets declare another function

function aThirdFunction() {
  console.log( myName ) 
}

// aThirdFunction() //ReferenceError: myName is not defined

// let numbers = [1,2,3,4,5,6]

// console.log( 1 in numbers ) 
// console.log( 8 in numbers )

// console.log(numbers.length)

// delete numbers[2]

// console.log(numbers.length)

// 08105639094 Nelson


// let numbers = [1,2,3,4,5,6]
// console.log(numbers)


// let k = numbers.shift()

// console.log(numbers)
// console.log(k)

// array.splice()
let names = ['Chidera', 'Paul', 'John', 'Emmanuel']
names.splice( 1, 2, 'Michael', 'Gideon')
// console.log(names) //[ 'Chidera', 'Michael', 'Gideon', 'Emmanuel' ]

// declaring only the first parameter
let fruits = ['orange', 'pear', 'mango','pineapple']
fruits.splice( 1 )
// console.log( fruits ) // [ 'orange' ]

// Adding an item but do not want to remove
let addFruits = ['orange', 'pear', 'mango','pineapple']
addFruits.splice( 1,0, 'banana' )
// console.log( addFruits ) //[ 'orange', 'banana', 'pear', 'mango', 'pineapple' ]

// Array.reverse()
let reverseFruits = ['orange', 'pear', 'mango','pineapple']
 reverseFruits.reverse()
//  console.log(reverseFruits) //[ 'pineapple', 'mango', 'pear', 'orange' ]

 //array.sort()
 let sortFruits = ['orange', 'pear', 'mango','pineapple']
 sortFruits.sort()
//  console.log( sortFruits ) //[ 'mango', 'orange', 'pear', 'pineapple' ]

//  let sortNumbers = [9,37,6,50,1]
//  sortNumbers.sort()
//  console.log(  sortNumbers )

// sort with compare function
let sortNumbersInAscending = [9,37,6,50,1]
sortNumbersInAscending.sort((a,b) => {
   if ( a > b){
     return 1      //that is, a should come first
   }else if ( b > a ) {
     return -1     // that is b should come first
   }else{
     return 0       // either a or b should come first
   }
 })
//  console.log( sortNumbersInAscending )

 let sortNumbersInDescending = [9,37,6,50,1]
 sortNumbersInDescending.sort(( a, b ) => {
   if( a > b ){
     return -1          // b, the smaller one  should come first
   }else if( b > a ){
     return 1            // a, the smaller one should come first
   }else{
     return 0            // any one should come first
   }
 })
//  console.log( sortNumbersInDescending )  //[ 50, 37, 9, 6, 1 ]


//  Mutating array methods
// Array.concat()
let scienceSubjects = ['Maths','Chemistry','Physics'];
let artSubjects = ['commerce', 'fine art', 'account'];
let skills = ['reading', 'coding']

// lets concat

let theirCombination = scienceSubjects.concat( artSubjects, 'programming', 'problem solving', skills )
// console.log( theirCombination  ) //[ 'Maths','Chemistry','Physics','commerce','fine art','account','programming','problem solving','reading','coding' ]

// Array.slice()

let numbers = [1,2,3,4,5,6]
let sliceNumbers = numbers.slice( 0, 4 );
// console.log( sliceNumbers )
// console.log( numbers )


// Array.join()
let evenNumbers = [2,4,6,8]
let joinNubers = evenNumbers.join()
// console.log( joinNubers )    //2,4,6,8

let joinNumbers2 = evenNumbers.join(' ') 
// console.log( joinNumbers2 ) //2 4 6 8

// Array.indexOf()
let newNames = ['Paul', 'John', 'Chidera', 'Peter', 'Gideon']
// let index = newNames.indexOf('Chidera');
// console.log(index)

// Array.lastIndexOf()
let Names = ['Paul','Chidera','John',  'Peter', 'Gideon','Chidera']
let index = Names.lastIndexOf('Chidera');
// console.log(index)

// Array.forEach()
let oddNumbers = [1,3,5,7,9];
let p = oddNumbers.forEach(function(item){
  // console.log(item*2)
})

// oddNumbers.forEach((item)=> console.log(item*2))

// let Names = ['Paul','Chidera','John',  'Peter', 'Gideon','Chidera','Shalom']

// forEach using es5
Names.forEach( function( eachName ) {
  // console.log( eachName + " is worthy" )
})

// Names.forEach(( eachName ) => console.log( eachName + " is worthy" ) )

// array.every()
// let evenNumbers = [2,4,6,8]
// let isEven = evenNumbers.every(function( numbers ){
//   numbers % 2 == 0
// })

// console.log( isEven )  //true  ---- ---because all of the elements is even

// Lets do something else

// let notEvenNumbers = [2,4,6,8,9]
// let isNotEven = notEvenNumbers.every(( numbers ) => numbers % 2 == 0 )
// console.log( isNotEven ) //false   ---because one of the elements is not even

// Array.some()
let notEvenNumbers = [3,5,7,8,9]
let isNotEven = notEvenNumbers.some(( numbers ) => numbers % 2 == 0 )
// console.log( isNotEven ) //fatrue  ---because one of the elements is  even

let oddNumber = [3,5,7,11,9]
let isOdd = oddNumber.some(( numbers ) => numbers % 2 == 0 )
// console.log( isOdd) //fatrue  ---because one of the elements is  even

// Array.map()
let doubleNumbers = numbers.map(( eachNumber ) => eachNumber * 4)
// console.log( doubleNumbers ) //[ 4, 8, 12, 16, 20, 24 ]
// console.log( numbers ) //[ 1, 2, 3, 4, 5, 6 ]

//array.filter()
let numbersGreaterThanThree = numbers.filter(( eachNumber ) => eachNumber > 3 )
// console.log( numbersGreaterThanThree ) //[ 4, 5, 6 ]
// console.log( numbers ) //[ 1, 2, 3, 4, 5, 6 ] 

// Array.reduce()

let sumNumbers = numbers.reduce(( latestValue, newValue) => {
  return latestValue + newValue
},4)
// console.log( sumNumbers )


// objects


let jane = {
  name: 'chidera',
  describe: function(){
    console.log(`${this.name} is here`)
  }
}

// jane.describe()

// let journal = [
//   {events: ["work", "touched tree", "pizza",
//   "running", "television"],
//   squirrel: false},
//   {events: ["work", "ice cream", "cauliflower",
//   "lasagna", "touched tree", "brushed teeth"],
//   squirrel: false},
//   {events: ["weekend", "cycling", "break", "peanuts",
//   "beer"],
//   squirrel: true},
//   /* and so on... */
//   ];

//   console.log(journal[1].squirrel)

let chideraLaptop = {
  //properties of this laptop
  model:  " lenovo Thinkpad Edge ",
  color: "black",
  ram: 4,
  HDD: 500,
  processor: 2.40,
  describe: function(){
    console.log(`${this.model} is a ${this.color} ${this.ram}gb ram laptop, it has a ${this.HDD} HDD and a processor of ${this.processor}`)  // WE ARE USING ES6 SYNTAX HERE
  }
}
  chideraLaptop["valid"] = true;
  // console.log( chideraLaptop["color"])

  // console.log( chideraLaptop )
  // console.log(chideraLaptop[processor])
  // console.log( chideraLaptop.processor)


  // ADDING PROPERTIES
  let laptop = {}
// lets add the model,processor and ram using dot notation
laptop.model = "lenovo thinkpad";
laptop.ram = 4;
laptop.processor = 2.40

// lets add the color and HDD using bracket notation

laptop["color"] = "white";
laptop["HDD"] = 500;

// lets view our new laptp object

// console.log( laptop )

// ACCESING PROPERTIES
// console.log( laptop.ram ) // 4;
// console.log( laptop.model ) //lenovo thinkpad;
// console.log( laptop.processor ) //2.40;

// // lets acces the color and HDD using the bracket notation
// console.log( laptop["color"] )  // black;
// console.log( laptop["HDD"] )    //500


chideraLaptop.describe()
console.log( chideraLaptop )

// DELETING OBJECT PROPERTY
delete chideraLaptop.model;
console.log( chideraLaptop.model )



// delete, 