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
console.log( sliceNumbers )
console.log( numbers )


// Array.join()
let evenNumbers = [2,4,6,8]
let joinNubers = evenNumbers.join()
console.log( joinNubers )    //2,4,6,8

let joinNumbers2 = evenNumbers.join(' ') 
console.log( joinNumbers2 ) //2 4 6 8