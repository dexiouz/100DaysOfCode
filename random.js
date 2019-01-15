let arrays = [1,2,3,4,5,6,7,1,9,4,3,2,8,3,1,2,6,5,3]
let uniqueArray = []
function unique(arrays){
   arrays.forEach(n => {
    if(!uniqueArray.includes(n)){
      uniqueArray.push(n)
    }
    // console.log(arrays)
  })
  console.log(uniqueArray)
}

unique(arrays)

// arrays
