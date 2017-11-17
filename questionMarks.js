/*
Using the Javascript language, have the function QuestionsMarks(str) take the str
string parameter, which will contain single digit numbers, letters, and question
marks, and check if there are exactly 3 question marks between every pair of
two numbers that add up to 10. If so, then your program should return the string
true, otherwise it should return the string false.  If there aren't any two numbers
that add up to 10 in the string, then your program should return false as well.
For example: if str is "arrb6??ee?4xxbl5???eee5" then your program should return
true because there are exactly 3 question marks between 6 and 4.
*/

function QuestionsMarks( str ) {
  var counter = 0;
  var x = 0;
  var y = 0;
  // check every character
  for ( var i = 0; i < str.length; i++ ) {
    // if its a ? and the counter is 0 and the character before is a number
    if ( str[ i ] == "?" && counter == 0 && !isNaN( str[ i - 1 ] ) ) {
      // save that number as x and add 1 to the counter
      x = parseInt( str[ i - 1 ] );
      counter += 1;
    // if the character its a ? and the counter is 2 (third question mark)
    } else if ( str[ i ] == "?" && counter == 2 ) {
      // if the character after the question mark is a number save it as y
      if ( !isNaN( str[ i + 1 ] ) ) {
        y = parseInt( str[ i + 1 ] );
        // if x + y adds to 10 return true
        if ( x + y == 10 ) {
          return true;
        }
      }
      // if the character after is not a number or x + y is not 10 reset counter
      counter = 0;
    // if the character is a ? and the counter is 1 add 1 to the counter
    } else if ( str[ i ] == "?" && counter == 1 ) {
      counter += 1;
    }
  }
  // if there aren't any matches return false
  return false;
}

console.log( QuestionsMarks("arrb6??ee?xxbl5??xeee?5") );
