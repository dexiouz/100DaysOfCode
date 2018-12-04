// FUNCTIONAL CLASS PATTERN

// function Dogs(name) {
//   this.greeting = function(){
//     console.log(`${name} is x years old`)
//   }
// }

// let myDog = new Dogs( "Musky" );
// myDog.greeting()


// function Dogs(name, age) {
//   function sayAge(){
//     return (`My age is ${age} years old`)
//   }


//   this.greeting = function(){
//     console.log(`${name} is my name and ${sayAge()}`)
//   }
// }

// let myDog = new Dogs( "Musky", 3 );
// myDog.greeting()


//FACTORY CLASS PATTERN 
// function Dogs(name, age) {
//   function sayAge(){
//     return (`My age is ${age} years old`)
//   }

//   return {
//     greeting() {
//       console.log(`${name} is my name and ${sayAge()}`)
//     }
//   }
// }

// let myDog = Dogs( "Musky", 3 );
// myDog.greeting()

// THE PROTOTYPE-BASED CLASSES
// function Dogs( name, age ) {
//   this._name = name;
//   this._age  = age;
// }
//   Dogs.prototype._sayAge  = function() {
//      return (`My age is ${this._age} years old`)
//   }

//   Dogs.prototype.greeting = function(){
//     console.log(`${this._name} is my name and ${this._sayAge()}`)
//   }


// let myDog = new Dogs( "Husky", 5);
// myDog.greeting()


function Dogs(name) {
  return {
    age(){
    console.log(`${name} is x years old`)
  }
  }
}
let myDog = Dogs( "Husky", 5);
 myDog.age()