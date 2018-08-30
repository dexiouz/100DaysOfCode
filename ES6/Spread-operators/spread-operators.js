const featured = ['deep dish', 'peperoni',]
const specialty = ['meatzza', 'spicy mama']

const deepDish = {
  pizzaName: 'deep dish',
  size: 'medium',
  ingredients: ['marinara', 'italian sausage', 'dough']
}

//old methid of combining two arrays and wants to add something inbetween
let pizzas = [];
pizzas = pizzas.concat(featured);
pizzas.push('veg');
pizzas = pizzas.concat(specialty);
console.log(pizzas)//[ 'deep dish', 'peperoni', 'veg', 'meatzza', 'spicy mama' ]

//doing same with a spread operator

let pizzas2 = []
pizzas2=[...featured, 'veg', specialty]
console.log(pizzas2)//[ 'deep dish', 'peperoni', 'veg', 'meatzza', 'spicy mama' ]

//copying an array
//stressful method
let fridaypizzas = [].concat(pizzas)
console.log(fridaypizzas)
//spread method
fridaypizzas = [...pizzas]
console.log(fridaypizzas)
//editing the copied array does not affect the content of the original array
fridaypizzas[0] = 'english pie'
console.log(fridaypizzas)//[ 'english pie', 'peperoni', 'veg', 'meatzza', 'spicy mama' ]
console.log(pizzas)//[ 'deep dish', 'peperoni', 'veg', 'meatzza', 'spicy mama' ]
