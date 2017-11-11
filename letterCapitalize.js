/*
Using the JavaScript language, have the function LetterCapitalize(str) take the str
parameter being passed and capitalize the first letter of each word. Words will be
separated by only one space.
*/

function LetterCapitalize( str ) {
  var strArray = str.split(" ");
  var newString = "";
  for ( var i = 0; i < strArray.length; i++ ) {
    // get the word
    var word = strArray[ i ];
    // get the first letter and convert it to uppercase
    var upperWord = word.charAt( 0 ).toUpperCase();
    // get the rest of the word and add it to the uppercase letter
    var finalWord = upperWord + word.slice( 1 );
    // add the new word to the new string
    newString += finalWord + " ";
  }
  return newString;
}

console.log( LetterCapitalize("this is a test") );
