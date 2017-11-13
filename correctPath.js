/*
Using the JavaScript language, have the function CorrectPath(str) read the str
parameter being passed, which will represent the movements made in a 5x5 grid of
cells starting from the top left position. The characters in the input string will
be entirely composed of: r, l, u, d, ?. Each of the characters stand for the
direction to take within the grid, for example: r = right, l = left, u = up, d = down.
Your goal is to determine what characters the question marks should be in order
for a path to be created to go from the top left of the grid all the way to the
bottom right.
*/

function CorrectPath( str ) {
  // represents the xy coordinates
  var position = [
    [ 0, 0 ]
  ];
  var instructions = str.split("");
  /* according to the instructions add or substract to the xy coordinates of
  position. 4:4 and 0:0 are the limits */
  for ( var i = 0; i < instructions.length; i++ ) {
    if ( instructions[ i ] == "r" && position[ 0 ][ 0 ] < 4 ) {
      position[ 0 ][ 0 ] += 1;
    }
    if ( instructions[ i ] == "d" && position[ 0 ][ 1 ] < 4 ) {
      position[ 0 ][ 1 ] += 1;
    }
    if ( instructions[ i ] == "l" && position[ 0 ][ 0 ] > 0 ) {
      position[ 0 ][ 0 ] -= 1;
    }
    if ( instructions[ i ] == "u" && position[ 0 ][ 1 ] > 0 ) {
      position[ 0 ][ 1 ] -= 1;
    }
  }
  var finalString = "";
  // substitute ? with the according instruction depending on the values of xy
  for ( var i = 0; i < instructions.length; i++ ) {
    if ( instructions[ i ] == "?" ) {
      // if x < 4 add right instruction and jump to the next loop
      if ( position[ 0 ][ 0 ] < 4 ) {
        finalString += "r";
        position[ 0 ][ 0 ] += 1;
        continue;
      }
      // if y < 4 add down instruction
      if ( position[ 0 ][ 1 ] < 4 ) {
        finalString += "d";
        position[ 0 ][ 1 ] += 1;
      }
      // if its a normal instruction add it
    } else {
      finalString += instructions[ i ];
    }
  }
  return finalString;
}

console.log( CorrectPath("d?rd?r??") );
