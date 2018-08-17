const name = 'snickers';
const age = 2;
//former way
const sentence = 'My dog ' + name + ' is ' + age*7 + ' years old.'
//es6 method Template string
const sentence1 = `My dog ${name} is ${age*7}  years old.`
console.log(sentence)
console.log(sentence1)