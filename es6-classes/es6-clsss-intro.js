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


// function Dogs(name) {
//   return {
//     age(){
    // console.log(`${name} is x years old`)
//   }
//   }
// }
// let myDog = Dogs( "Husky", 5);
//  myDog.age()

// INHERITANCE IN CLASS PROTOTYPES
// function Developer(name){
//   this.name = name
// }

// Developer.prototype.canCode = function(){
//   console.log(`${this.name} can code`)
// }

// let developer = new Developer("Chidera")


// function Human(name){
//   this.name = name
// }

// Human.prototype.canRead = function(){
//   console.log(`${this.name} can also read`)
// }

// let human = new Human("Paul")
// ========================================

// THE INHERITANCE MAGIC
// =====================
// function Human(name) {
//   this.name = name;
// }

// // All animals can eat, right?
// Human.prototype.canRead = function(){
//   console.log(`${this.name} can also read`);
// }

// // Same Rabbit as before
// function Developer(name) {
//   this.name = name;
// }

// Developer.prototype.canCode = function(){
//     console.log(`${this.name} can code`)
//   }

// // setup the inheritance chain
// Developer.prototype.__proto__ = Human.prototype; // (*)

// let developer = new Developer("Chidera");
// developer.canCode(); // rabbits can eat too
// developer.canRead();

//THE CLASS CONSTRUCT SYNTAX
// ==========================================
// class Developer{
//   constructor(name){
//     this.name = name ;
//   }
//   canCode(){
//     console.log(`${this.name} can code`)
//   }
//   canRead(){
//     console.log(`${this.name} can read`)
//   }
// }

// let developer = new Developer("Paul")
// developer.canCode()
// developer.canRead()

// CLASS PROOFS
//  Prove that the syntax declares a variable called "Developer". This Developer in turn references a method called "constructor"?
// ===================================================================================================================
// class Developer {
//   constructor(name) {
//     this.name = name;
//   }
//   canCode() {
//     console.log(`${this.name} can code`)
//   }
// }

// console.log(Developer === Developer.prototype.constructor)    // true

// Show that all of its (class) methods are put into "Developer.prototype".Do this by this by Showing that from the example above, canCode(), canRead() and constructor() are put into "Developer.prototype".
// ======================================================================================================================
// class Developer {
//   constructor(name) {
//     this.name = name;
//   }
//   canCode() {
//     console.log(`${this.name} can code`)
//   }
//   canRead() {
//     console.log(`${this.name} can read`)
//   }
// }
// //  To prove the existence of three methods 
// console.log(Object.getOwnPropertyNames(Developer.prototype))

// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { alert(this.name); }
// }

// // proof: User is the "constructor" function
// console.log(User === User.prototype.constructor); // true

// // proof: there are two methods in its "prototype"
// console.log(Object.getOwnPropertyNames(User.prototype));

// A FEW THINGS TO NOTE
class Developer {
  constructor() {}
}

console.log(typeof Developer); // function
new Developer(); // Error: Class constructor User cannot be invoked without 'new'