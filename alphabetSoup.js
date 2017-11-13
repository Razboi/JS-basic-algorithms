/*
Using the JavaScript language, have the function AlphabetSoup(str) take the str
string parameter being passed and return the string with the letters in alphabetical
order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not
be included in the string.
*/

function AlphabetSoup( str ) {
  // make the str an array and sort it
  var strArray = ( str.split("") ).sort();
  var sortedString = "";
  // add every sorted element of the array to the new string
  for ( var i = 0; i < strArray.length; i++ ) {
    sortedString += strArray[ i ];
  }
  // return the new string without the whitespace
  return sortedString.trim();
}

console.log( AlphabetSoup("this is a test") );
