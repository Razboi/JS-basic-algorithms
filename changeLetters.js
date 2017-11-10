/*
Using the JavaScript language, have the function LetterChanges(str) take the str
parameter being passed and modify it using the following algorithm. Replace every
letter in the string with the letter following it in the alphabet.
Then capitalize every vowel in this new string (a, e, i, o, u) and finally
return this modified string.
*/

function LetterChanges ( str ) {
  var finalString = "";
  /* Convert every letter to charcode, add 1 and convert back to string.
   This gets us the new string stored in lowerString */
  for ( var i = 0; i < str.length; i++ ) {
    var asCharCode = (str.charCodeAt( i ) + 1);
    var letter = (String.fromCharCode( asCharCode ));
    /* if its a vowel store it as uppercase, if its { that means it was a z
    ( next charcode to z is { ) so store A, else lowercase */
    if ( letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
      finalString += letter.toUpperCase();
    } else if ( letter == "{") {
      finalString += "A";
    } else {
      finalString += letter.toLowerCase();
    }
  }
  return finalString;
};

console.log( LetterChanges("abcdz") );
