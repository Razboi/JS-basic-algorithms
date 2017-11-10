/*
Using the JavaScript language, have the function FirstReverse(str) take the
 str parameter being passed and return the string in reversed order.
 For example: if the input string is "Hello World and Coders" then your program
 should return the string sredoC dna dlroW olleH.
 */

function FirstReverse( str ) {
  // Solution 1
  var newString = "";
  for ( var i = str.length - 1; i >= 0; i-- ) {
    newString += str[ i ];
  }
  return newString;

  /* Solution 2
  var splitStr = str.split("");
  var reverseArray = splitStr.reverse();
  var newStr = reverseArray.join("");
  return newStr;
  */

  /* Solution 3
  return str.split("").reverse().join("");
  */
}

console.log( FirstReverse("Javascript is interesting") );
