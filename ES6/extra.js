	//when you need a method to bind to an object 	
const person = {
	points: 23,
	score() {
		console.log(this)
		return this.points + 1;
	},
	//or
	score1: function () {
		return this.points + 1;
	}
}
// console.log(person.score());
// console.log(person.score1())


//when you need to add a prototype method
class car {
	constructor(make, color) {
		this.make = make;
		this.color = color;
	this.summarize=()=>{
			return `This car is a ${this.make} in the colour ${this.color}`
		}
	}
}

const beamer = new car ('bmw', 'blue');
const subie = new car ('subaru', 'white')

// console.log(beamer.summarize());
// console.log(subie.summarize())

//when you need arguments object
const orderChildren = function (){
	const children = Array.from(arguments);
	return children.map((child, i)=>{
		return `${child} was child #${i + 1}`
	})
	// console.log(arguments)
}

console.log(orderChildren('chika', 'Grace', 'ELijah'))