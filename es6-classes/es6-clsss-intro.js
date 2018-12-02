// function Dogs(name) {
//   this.greeting = function(){
//     console.log(`${name} is x years old`)
//   }
// }

// let myDog = new Dogs( "Musky" );
// myDog.greeting()


function Dogs(name, age) {
  function sayAge(){
    return (`My age is ${age} years old`)
  }


  this.greeting = function(){
    console.log(`${name} is my name and ${sayAge()}`)
  }
}

let myDog = new Dogs( "Musky", 3 );
myDog.greeting()
