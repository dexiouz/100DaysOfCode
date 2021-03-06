// ALGORITHMS
function reverse(sentence){
  let splitSentence = sentence.split(' ')
  let reversed = [];
  for (let i = splitSentence.length-1; i>=0; i--){
      reversed.push(splitSentence[i])
      // console.log(splitSentence[i]);
  }
 
  if ( reversed.join(' ') === sentence ) {
      console.log(true, `"${ sentence }" is a palindrome`)
  }else{
      console.log(false, `"${ sentence }" is not a palindrome`)
  }
  console.log(sentence) // Eve damned Eden, mad Eve
  console.log(reversed.join(' '));// Eve mad Eden, damned Eve
}
// reverse('Eve damned Eden, mad Eve')
// reverse('Lon nol') //false 'Eve damned Eden, mad Eve is not a palindrome'
// reverse('Sore was I ere I saw Eros')  

 let myAge = 13 //prompt( 'how old are you' )

// switch( myAge ){
//   case 13:
//     console.log("correct ");
//     break;
//   case 11:
//     console.log('no you are wrong');
//     break;
//   case 10:
//     console.log( 'I said you are wrong' );
//     break;
//   default:
//      console.log( 'Am done with you' );
// }


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
  
  
  // chideraLaptop.describe()
  // console.log( chideraLaptop )
  
  // DELETING OBJECT PROPERTY
  // delete chideraLaptop.model;
  // console.log( chideraLaptop.model )
  
  // LOOPING THROUGH OBJECTS
  
  // looping through keys
  for ( let key in chideraLaptop ){
    // console.log( `${key},` )
  }
  // looping through values
  for ( let key in chideraLaptop ){
    // console.log( `${chideraLaptop[key]},`)
  }
  
  // THE IN KEYWORD
  // console.log("model" in chideraLaptop)
  
  // STORING OBJECTS
  let myName = 'Chidera';
  let myNomenclature = myName;
  
  // console.log( myName ); // 'Chidera'
  // console.log( myNomenclature ); //'Chidera'
  myNomenclature = 'Paul'
  // console.log( myNomenclature ); 
  
  // console.log( myName );
  
  
  let Laptop = {
    name: "lenovo"
  }
  
  let pc = Laptop
  
  // console.log( pc.name ) // lenovo
  // console.log( Laptop.name ) //lenovo
  
  // Now lets change the value of "name" in pc
  
  pc.name = "samsung";
  
  // console.log( pc.name ) //samsung
  // console.log( Laptop.name ) //samsung
  
  // IF TWO OBJECTS ARE THE SAME
  // console.log(pc === Laptop) //true
  const arrayNames = ['Paul','Chidera','John',  'Peter', 'Gideon','Eazi','Shalom']
  
  for (let name of arrayNames){
    // console.log( `${name} is worthy` )
  }
  
  
  for (let name in arrayNames){
    // console.log( name )
  }
  
  // using the for in to access elements/
  for (let name in arrayNames){
    // console.log( `${arrayNames[name]} is worthy` )
  }
  // The difference betwee for of and for in loop is that for of accesses te elements while for in accesses the index
  
  //FOR LOOP
  for ( let index = 0; index <= arrayNames.length-1; index++){
    // console.log( arrayNames[index] )
  }
  
  for (let index = 0; index <= 3; index++){
    // console.log( index)  // loop body
  }
  
  let i = 0;
  while( i <= arrayNames.length-1){
    // console.log( arrayNames[i] );
    i++
  }
  
  // let indx = 0;
  // do{
  //   console.log( arrayNames[indx] )
  // }
  // while(  indx <= arrayNames.length-1 )
  
  // let iv = 1;
  // do {
  //   console.log( iv );
  //   i++;
  // } while (iv < 6);
  // i++;
  
  // Day57 coding challenge
  // 1 First create an array with some years
  const years =  [ 1998, 2005, 1994 ];
  //2 create an empty array
   const emptyArray = [];
  // //3 use a loop to fill the empty array with the ages of the persons
  // // lets use a for of loop
  for( let year of years ){
    let age = 2018 - year;
    emptyArray.push( age );
  }
  //4 Use a loop to log into the console whether each person is of full age ( 18 0r older ), as well as their age.
  // lets use a for in loop
  for (year in years) {
    if (emptyArray[year] >= 18) {
      // console.log(`Age ${emptyArray[year]}years old is of full age`)
    } else {
      // console.log(`Age ${emptyArray[year]}years old is NOT of full age`)
    }
  }
  

  // console.log( ' FUNCTION STARTS HERE ' )
  function printFullAge( arrayOfYears ){
    const ages = [];
    const isFullAge = [];
   
    for( let year of arrayOfYears ){
      let age = 2018 - year;
      ages.push( age );
    };
    for (year in arrayOfYears) {
      if (ages[year] >= 18) {
        console.log(`Age ${ages[year]}years old is of full age`);
        isFullAge.push( true )
      } else {
        console.log(`Age ${ages[year]}years old is NOT of full age`)
        isFullAge.push( false )
      }
    }
    return isFullAge;
  }
  let years2 = [ 2001, 2007, 1995, 2009 ]
  // let full_1 = printFullAge( years );
  // let full_2 = printFullAge( years2 )
  // console.log( full_1 );
  // console.log( full_2 );

  // DESTRUCTURING

  let players = [ 'player1', 'player2', 'captain', 'player3', ];

//  to access members of this array, wwe do this;

//  let firstPlayer = players[0];
//  let secondPlayer = players[1];
//  let captain = players[2];

//  lets display them on the screen
// console.log( captain ) //captwin
// console.log( firstPlayer ) //player1
// console.log( secondPlayer ) //player2

// lets destructure
// let [  firstPlayer,  secondPlayer, captain, thirdPlayer ] = players;
// console.log( captain ) //captwin
// console.log( firstPlayer ) //player1
// console.log( secondPlayer ) //player2  

let [ , , captain ] = players;
console.log( captain )  //captain

// consider this object
let details = {
  name: 'Chidera',
  school: 'fupre'
}
// old waY
let name = details.name;
let school = details.school;

console.log( name );
console.log( school )
// let { name, school } = details
// console.log( name, school )

// rest operaror
// in arrays
let subjects = ['english', 'maths', 'economics', 'physics']
let[ subject1, subject2 , ...others] = subjects
// console.log( subject1, subject2 , others[0],others[1])

// rest operator in arrays
let book = {
  title: 'enigma',
  author: 'anybody',
  pages: 223,
  hasEbook: false
}

// lets destructure

let { title, author, ...rest } = book
// console.log( title, author, rest.pages, rest.hasEbook)

// Day60
// var
if ( 2 > 1){
  var greater = 2;
}

// console.log( greater ) //2

for ( let things = 0; things< 3;things++){
  // console.log( item )
}

console.log( things )
