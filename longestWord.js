/*
Using the JavaScript language, have the function LongestWord(sen) take the sen
parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word
from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function LongestWord( sen ) {
  var words = sen.split(" ");
  var lengthCounter = 0;
  for ( var i = 0; i < words.length; i++ ) {
    if ( words[ i ].length > lengthCounter ) {
      lengthCounter = words[ i ].length;
      var finalWord = words[ i ];
    }
  }

  console.log( lengthCounter );
  return finalWord;
}

console.log( LongestWord("javascript is very interesting" ) );
