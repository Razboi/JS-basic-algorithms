/*
Using the Python language, have the function ScaleBalancing(strArr) read strArr
which will contain two elements, the first being the two positive integer weights
on a balance scale (left and right sides) and the second element being a list of
available weights as positive integers. Your goal is to determine if you can
balance the scale by using the least amount of weights from the list, but using
at most only 2 weights.
*/


function ScaleBalancing( strArr ) {
  var x = strArr[ 0 ][ 0 ];
  var y = strArr[ 0 ][ 1 ];
  var w = strArr[ 1 ];
  // if adding any single weight to x or y balances the scale, return the weight
  for ( var i = 0; i < w.length; i++ ) {
    if ( x + w[ i ] == y || y + w[ i ] == x ) {
      return w[ i ];
    }
  }
  /* for any two weights if adding one to x and one to y or two to x or two to y
  balances the scale return the values of the weights */
  for ( var i = 0; i < w.length; i++ ) {
    // i represents one weight and j loops through all the others
    for ( var j = i + 1; j < w.length; j++ ) {
      if ( x + w[ i ] == y + w[ j ] || x + w[ j ] == y + w[ i ] ||
        x + w[ i ] + w[ j ] == y || y + w[ i ] + w[ j ] == x ) {
          return `${w[ i ]}, ${w[ j ]}`;
        }
    }
  }
  // if it's not possible to balance it, return not possible
  return "Not possible";
}

console.log( ScaleBalancing([ [ 3, 4 ], [ 1, 2, 7, 7, 8 ] ]) );
