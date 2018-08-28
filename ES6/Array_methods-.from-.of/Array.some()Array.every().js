const ages = [32, 24,18,19]
const youngins = [1,2,3]
//is there adult in the group?
const adultPresent = ages.some(age => age>=18);
console.log(adultPresent)
const AnotheradultPresent = youngins.some(age => age>=18);
console.log(AnotheradultPresent)
//is everyone old enough to drink, does everyone meet the condition
const allOldEnough = ages.every(age => age>=18)
console.log(allOldEnough)