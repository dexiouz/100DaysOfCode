// let reversedWord = function reverse(word){
//   let splitWord = word.split(' ')
//   let reversed = [];
//   for (let i = 0; i<=splitWord.length; i++){
//       reversed.unshift(splitWord[i]);
//   }
//   console.log(reversed.join(' '))
// }
// reversedWord('My name is Michele')  // Michelle is name My

function reverse(word){
  let splitWord = word.split('')
  let reversed = [];
  for (let i = splitWord.length-1; i>=0; i--){
      reversed.unshift(splitWord[i])
  }
 
  if ( reversed.join('') === word ) {
      console.log(true, `"${ word }" is a palindrome`)
  }else{
      console.log(false, `"${ word }" is not a palindrome`)
  }
  console.log(reversed.join(''));// Eve damned Eden, mad Eve
}
reverse('madam')