// USING PUSH METHOD FOR STRING REVERSAL
// let reversedWord = function reverse(word){
//   let splitWord = word.split('')
//   let reversed = [];
//   for (let i = splitWord.length-1; i>=0; i--){
//       reversed.push(splitWord[i]);
//   }
//   console.log(reversed.join(''))
// }
// reversedWord('element')  //"tnemele"

// USING PUSH METHOD FOR SENTENCE REVERSAL
let reversedSentence= function reverse(sentence){
  let splitSentence = sentence.split(' ')
  let reversed = [];
  for (let i = splitSentence.length-1; i>=0; i--){
          reversed.push(splitSentence[i]);
      }
  console.log(reversed.join(' '))
}
reversedSentence('I am beautiful') //"beautiful am I"


// USING UNSHIFT METHOD FOR STRING REVERSAL
// let reversedWord = function reverse(word){
//   let splitWord = word.split('')
//   let reversed = [];
//   for (let i = 0; i<=splitWord.length; i++){
//       reversed.unshift(splitWord[i]);
//   }
//   console.log(reversed.join(''))
// }
// reversedWord('knowledge')  //"egdelwonk"



// USING UNSHIFT METHOD FOR SENTENCE REVERSAL
// let reversedSentence= function reverse(sentence){
//   let splitSentence = sentence.split(' ')
//   let reversed = [];
//   for (let i = 0; i<=splitSentence.length; i++){
//       reversed.unshift(splitSentence[i]);
//   }
//   console.log(reversed.join(' '))
// }
// reversedSentence('javascript is actually fun and interesting')  //" interesting and fun actually is javascript"

// ALGORITHM TO RETURN UNIQUE NUMBERS FROM AN Array
let arrays = [1,2,3,4,5,6,7,1,9,4,3,2,8,3,1,2,6,5,3]
let uniqueArray = []
  function unique(arrays){
      arrays.forEach(number => {
      if(!uniqueArray.includes(number)){
        uniqueArray.unshift(number)
      }
    })
    console.log(uniqueArray)
  }
  unique(arrays)

  

