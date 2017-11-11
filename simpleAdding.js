/*
Using the JavaScript language, have the function SimpleAdding(num)
add up all the numbers from 1 to num.
*/

function SimpleAdding( num ) {
  var finalSum = 0;
  for ( var i = 1; i <= num; i++ ) {
    finalSum = finalSum + i;
  }
  return finalSum;
}

console.log( SimpleAdding( 4 ) );
