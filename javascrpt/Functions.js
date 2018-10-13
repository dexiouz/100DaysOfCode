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

let numbers = [1,2,3,4,5,6]

// console.log( 1 in numbers ) 
// console.log( 8 in numbers )

// console.log(numbers.length)

// delete numbers[2]

// console.log(numbers.length)

// 08105639094 Nelson


// let numbers = [1,2,3,4,5,6]
console.log(numbers)


let k = numbers.shift()

console.log(numbers)
console.log(k)