/*
Using the JavaScript language, have the function ClosestEnemyII(strArr) read the
matrix of numbers stored in strArr which will be a 2D matrix that contains only
the integers 1, 0, or 2. Then from the position in the matrix where a 1 is,
return the number of spaces either left, right, down, or up you must move to
reach an enemy which is represented by a 2. You are able to wrap around one side
of the matrix to the other as well.
*/

function ClosestEnemyII( strArr ) {
  // coordinates of the 1 and the enemies
  var position = [];
  var enemies = [];
  for ( var i = 0; i < strArr.length; i++ ) {
    for ( var j = 0; j < strArr[ i ].length; j++ ) {
      // find the 1
      if ( strArr[ i ][ j ] == 1 ) {
        position.push( j, i );
      }
      // find all the enemies
      if ( strArr[ i ][ j ] == 2 ) {
        enemies.push([ j, i ]);
      }
    }
  }
  // if there is any enemy
  if ( enemies.length > 0 ) {
    var closestEnemy = 1000;
    // for each enemy get the total spaces from 1 to the enemy
    for ( var i = 0; i < enemies.length; i++ ) {
      var enemy = enemies[ i ];
      // get the difference between the 1 coordinates and the enemy coordinates
      var xspace = Math.abs( position[ 0 ] - enemy[ 0 ] );
      var yspace = Math.abs( position[ 1 ] - enemy[ 1 ] );
      var totalSpace = xspace + yspace;
      // if totalSpace < closestEnemy make him the new closest enemy
      if ( totalSpace < closestEnemy ) {
        closestEnemy = totalSpace;
      }
    }
    // return the number of spaces to the closest enemy
    return closestEnemy;
  }
  // if there aren't any enemies return 0
  return 0;
}

console.log( ClosestEnemyII([ "0002", "1000", "0002", "2002" ]) );
