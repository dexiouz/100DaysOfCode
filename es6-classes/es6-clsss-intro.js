function Dogs(name) {
  this.age = function(){
    console.log(`${name} is x years old`)
  }
}

let myDog = new Dogs( "Musky" );
myDog.age()

