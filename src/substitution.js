// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //add guard clauses
    if(!alphabet || alphabet.length !== 26) {
      return false
    }
    const strArr = alphabet.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    if (strArr != null) {
      return false
    }
    //declare our own regular alphabet
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    //create empty response for result
    let result = ""
    // if encode is true
    if(encode) {
      //loop through input
      for(let i = 0; i < input.length; i++) {
        let char = input[i]
        //if char is space push to result
        if(char === " ") {
          result += " "
          continue
        }
        //find each char in our own declared alphabet earlier
        let num = alpha.indexOf(char.toLowerCase())
        if(char === -1) {
          result += char
        } else {
          //match chars index from our alphabet to given alphabet index
          //push letter/symbol at that index to our result
          result += alphabet[num]
        }
      }
      //if encode is false
    }else{
      //loop through input
      for(let i = 0; i < input.length; i++) {
        const char = input[i]
        //if char is space push to result
        if(char === " "){
          result += " "
          continue
        }
        //find each char in the given akphabet
        const num = alphabet.indexOf(char.toLowerCase())
        if(num === null) {
          result += char
        } else {
          //match chars index from teh given alphabet to the index of the alphabe twe decalared
          //push letter at that index to our result
          result += alpha[num]
        }
      }
    }
    //return result
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
