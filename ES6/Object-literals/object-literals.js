const 
  first = 'snickers',
  last = 'bobby',
  age = 4;
  breed = 'dalmatian',

  dog = {
    first,
    last,
    age,
    breed,
  }
console.log(dog)//{ first: 'snickers', last: 'bobby', age: 4, breed: 'dalmatian' }

//when you have method definition inside of an object


const modal = {
  create(){

  },
  open(){

  },
  //same as doing this
  close: function() {

  }
  //because we have this simplified form, dont use arrow functions for methods in your bjects
}

//Computed properties

function invertColor(color){
  return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
}

const key = 'pocketColor';
const value = '#ffc600';

const tshirt = {
  [key]: value,
  [`${key}Opposite`]: invertColor(value)
};

console.log(tshirt)//{ pocketColor: '#ffc600', pocketColorOpposite: '#0039ff' 

//Another example of computed properties

const 
  keys = ['size', 'color', 'weight'],values = ['medium', 'red', 100],

  shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
  }

  console.log(shirt)//{ size: 'medium', color: 'red', weight: 100 }