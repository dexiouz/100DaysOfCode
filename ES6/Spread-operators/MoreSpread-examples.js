//you want to join the contents of a second array to another array. Applying .push() adds the second array and its content as one array but spread can help you get the individual arrays as single array.

const inventors = ['Einstein', 'Newton']
const newInventors = ['Musk', 'jobs', 'Gates']


//long way of doing it is 
inventors.push.apply(inventors, newInventors)
 console.log(inventors)//['Einstein', 'Newton','Musk', 'jobs', 'Gates']


 //using spread passes the individual arguments
 inventors.push(...newInventors)
 console.log(inventors)
//['Einstein', 'Newton','Musk', 'jobs', 'Gates']

 //spreading into a function
 const name = ['Chidera', 'Ugwuanyi']

 function sayHi(firstName, lastName){
   console.log(`hey there ${firstName} ${lastName}`)
 }

 //old method of passing the arguments would be 
 sayHi(name[0], name[1])
 //spread method would be 
 sayHi(...name)

