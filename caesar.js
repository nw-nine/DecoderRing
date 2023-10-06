// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input="", shift=0, encode = true) {
    // your solution code here
    //if encode is true use the shift if its false use opposite of shift 
    if(!encode) shift = shift * -1
    //create string for alphabet so you can see index values
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    //if shift has no value or greater than 25 or less than -25 return false
    if(!shift || shift === 0 || shift > 25 || shift < -25) {
      return false
    }
    //create result to hold answer 
    let result = ""
    //loop through lowercase input and chekc if characters exist in alphabet
    input = input.toLocaleLowerCase()
    for(let i = 0; i < input.length; i++) {
      const char = input[i]
      if(!alpha.includes(char)){
        result += char
      }
      //if so add shift to the index of letter in alphabet
      //add character from shifted index to result
      else{
        let index = alpha.indexOf(char)
        index = (index + shift + 26) % 26
        result += alpha[index]
      }
    }
    //return result 
    return result
  }







  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
