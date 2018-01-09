// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
	return str
		.replace(/[^\w]/g)
		.toLowerCase()
		.split('')
		.sort()
		.join('');
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//   const charMapA = charMap(stringA);
//   const charMapB = charMap(stringB);
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }else{
//     for (let char in charMapA) {
//       if (charMapA[char] !== charMapB[char]){
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function charMap(str) {
//   obj = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//       !obj[char] ? obj[char] = 1 : obj[char] ++;
//     }
//   return obj;
// }