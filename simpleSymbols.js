/*
Using the JavaScript language, have the function SimpleSymbols(str) take the str
parameter being passed and determine if it is an acceptable sequence by either
returning the string true or false. The str parameter will be composed of + and =
symbols with several letters between them (ie. ++d+===+c++==a) and for the string
to be true each letter must be surrounded by a + symbol.
The string will not be empty and will have at least one letter.
*/

function SimpleSymbols( str ) {
  var strArray = str.split("");
  for ( var i = 0; i < strArray.length; i++ ) {
    // check if the character is a letter
    if ( strArray[ i ].match( /[a-z]/i ) ) {
      // if the letter is in the first or last position return false
      if ( i == 0 || i == strArray.length - 1 ) {
        return false;
      }
      // if the letter doesn't have + in the next and previous positions return false
      if ( strArray[ i + 1 ] !== "+" || strArray[ i - 1 ] !== "+" ) {
        return false;
      }
    }
  }
  // if every letter matches the required sequence return true
  return true;
}

console.log( SimpleSymbols("=+==+a+=+b+++a+=+") );
