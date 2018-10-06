function reverse(sentence){
  let splitSentence = sentence.split(' ')
  let reversed = [];
  for (let i = splitSentence.length-1; i>=0; i--){
      reversed.push(splitSentence[i])
      // console.log(splitSentence[i]);
  }
 
  if ( reversed.join(' ') === sentence ) {
      console.log(true, `"${ sentence }" is a palindrome`)
  }else{
      console.log(false, `"${ sentence }" is not a palindrome`)
  }
  console.log(sentence) // Eve damned Eden, mad Eve
  console.log(reversed.join(' '));// Eve mad Eden, damned Eve
}
reverse('Eve damned Eden, mad Eve')
// reverse('Lon nol') //false 'Eve damned Eden, mad Eve is not a palindrome'
// reverse('Sore was I ere I saw Eros')