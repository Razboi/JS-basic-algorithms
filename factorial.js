/*
Using the JavaScript language, have the function FirstFactorial(num) take the num parameter
being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)).
For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/

function FirstFactorial( num ) {
  for ( var i = num - 1; i > 0; i-- ) {
    num = num * i;
  }
  return num;
}

console.log( FirstFactorial( 4 ) );
