/// This file contains all of the logic for the connect Four hard mode AI which uses the minimax algorithm\
//  cols     0        1        2        3        4        5        6
//  row 0  [0][0] , [0][1]
//  row 1  [1][0] , [1][1]
//  row 2
//  row 3
//  row 4  [4][0]
//  row 5
//  row 6

/************************************************************
 * isWin() - returns true if the current player has a win condition
 * board = current board
 * playerPiece = true if player false if AI by default
 * playerMoves = an array of all of the current moves
 **********************************************************/
export function isWin(board, playerPiece, move) {
  //iterate through all of the playerMoves, for each position check the neighboring nodes in horizontal, vertical, and diagonal fashion
  if (
    // best way to do this is to check only for the new chip that is placed
    diagonalWin2(board, playerPiece, move) ||
    verticalWin(board, playerPiece, move) ||
    horizontalWin(board, playerPiece, move) ||
    diagonalWin1(board, playerPiece, move)
  ) {
    return true;
  } else {
    return false;
  }
}

// is a win on -horizontal  fashion accross the board
function horizontalWin(board, playerPiece, move) {
  var count = 0;
  for (var y = 0; y < 7; y++) {
    if (board[move[0]][y] === playerPiece) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
  }
}

// is a win on |vertical  fashion accross the board
function verticalWin(board, playerPiece, move) {
  var count = 0;
  for (var x = 0; x < 6; x++) {
    if (board[x][move[1]] === playerPiece) {
      count++;
      if (count === 4) {
        return true;
      }
    } else {
      count = 0;
    }
  }
}

// Is a win in either / or \ fasion diagonally on the board
function diagonalWin1(board, playerPiece, move) {
  /// OPERATION FOR / DIAGONAL CHECK
  let startPos = [
    [3, 0],
    [4, 0],
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
  ];
  let endPos = [
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 6],
    [2, 6],
  ];

  //[3,0 map]
  var diagonalMap = {
    "3,0": 0,
    "2,1": 0,
    "1,2": 0,
    "0,3": 0,
    "4,0": 1,
    "3,1": 1,
    "2,2": 1,
    "1,3": 1,
    "0,4": 1,
    "5,0": 2,
    "4,1": 2,
    "3,2": 2,
    "2,3": 2,
    "1,4": 2,
    "0,5": 2,
    "5,1": 3,
    "4,2": 3,
    "3,3": 3,
    "2,4": 3,
    "1,5": 3,
    "0,6": 3,
    "5,2": 4,
    "4,3": 4,
    "3,4": 4,
    "2,5": 4,
    "1,6": 4,
    "5,3": 5,
    "4,4": 5,
    "3,5": 5,
    "2,6": 5,
  };

  var idx = diagonalMap[move[0] + "," + move[1]];
  if (idx == undefined) {
    return false;
  }
  let start = startPos[idx];
  let end = endPos[idx];
  let count = 0;

  // iterate diagonally form start to finish accross the diagonal / positions on board
  do {
    if (board[start[0]][start[1]] === playerPiece) {
      count++;
      if (count > 3) {
        return true;
      }
    } else {
      count = 0;
    }

    start[0]--;
    start[1]++;
  } while (start[0] !== end[0] - 1 && start[1] !== end[1] + 1);

  return false;
}

function diagonalWin2(board, playerPiece, move) {
  /// OPERATION FOR \ DIAGONAL CHECK
  let endPos = [
    [0, 3],
    [0, 2],
    [0, 1],
    [0, 0],
    [1, 0],
    [2, 0],
  ];
  let startPos = [
    [3, 6],
    [4, 6],
    [5, 6],
    [5, 5],
    [5, 4],
    [5, 3],
  ];

  var diagonalMap = {
    "0,3": 0,
    "1,4": 0,
    "2,5": 0,
    "3,6": 0,
    "0,2": 1,
    "1,3": 1,
    "2,4": 1,
    "3,5": 1,
    "4,6": 1,
    "0,1": 2,
    "1,2": 2,
    "2,3": 2,
    "3,4": 2,
    "4,5": 2,
    "5,6": 2,
    "0,0": 3,
    "1,1": 3,
    "2,2": 3,
    "3,3": 3,
    "4,4": 3,
    "5,5": 3,
    "1,0": 4,
    "2,1": 4,
    "3,2": 4,
    "4,3": 4,
    "5,4": 4,
    "2,0": 5,
    "3,1": 5,
    "4,2": 5,
    "5,3": 5,
  };

  var idx = diagonalMap[move[0] + "," + move[1]];
  if (idx == undefined) {
    return false;
  }
  let start = startPos[idx];
  let end = endPos[idx];
  let count = 0;

  // iterate diagonally form start to finish accross the diagonal / positions on board
  do {
    if (board[start[0]][start[1]] === playerPiece) {
      ++count;
      if (count > 3) {
        return true;
      }
    } else {
      count = 0;
    }

    start[0]--;
    start[1]--;
  } while (start[0] !== end[0] - 1 && start[1] !== end[1] - 1);

  return false;
}

// Main algorithm that analyzies the best possible move
export function miniMaxAI(board, aiPiece, numTurns, searchDepth) {
  // recurse through all the options and pick the max value
  var possibleMoves = [];
  var output = [];

  for (var y = 0; y < 7; y++) {
    let move = placePiece(board, y, aiPiece);
    if (move !== null) {
      let boardClone = deepCopyArray(board);
      boardClone[move[0]][move[1]] = aiPiece;
      possibleMoves.push(y);
      var alpha = -Infinity;
      var beta = Infinity;
      output.push(
        aplhaBetaPruning(
          boardClone,
          false,
          alpha,
          beta,
          !aiPiece,
          numTurns + 1,
          0,
          move,
          searchDepth
        )
      );
    }
  }

  console.log(output);

  var max = output[0];
  var maxIdx = possibleMoves[0];
  for (var i = 1; i < possibleMoves.length; i++) {
    if (output[i] > max) {
      max = output[i];
      maxIdx = possibleMoves[i];
    }
  }

  return maxIdx;
}

// Main powerhouse of the miniMaxAI function which recurses through all possible states
function aplhaBetaPruning(
  board,
  isMax,
  alpha,
  beta,
  playerPiece,
  numTurns,
  depth,
  move,
  searchDepth
) {
  if (numTurns > 6) {
    if (isWin(board, !playerPiece, move)) {
      if (isMax) {
        return -100 + numTurns;
      } else {
        return 100 - numTurns;
      }
    }
  }

  if (depth === searchDepth) {
    return evaluateValue(board);
  }

  if (isMax) {
    // for maximizer - if current value is greater than alpha value, skip
    var bestVal = -Infinity;

    for (var i = 0; i < 7; i++) {
      let move = placePiece(board, i);
      if (move == null) continue;
      var boardClone = deepCopyArray(board);
      boardClone[move[0]][move[1]] = playerPiece;
      let output = aplhaBetaPruning(
        boardClone,
        !isMax,
        alpha,
        beta,
        !playerPiece,
        numTurns + 1,
        depth + 1,
        move,
        searchDepth
      );

      bestVal = Math.max(output, bestVal);
      alpha = Math.max(bestVal, alpha);

      if (beta <= alpha) {
        break;
      }
    }
    return bestVal;
  } else {
    // for minimizer - if current value is less than beta value, skip
    var bestVal = Infinity;

    for (var i = 0; i < 7; i++) {
      let move = placePiece(board, i);
      if (move == null) continue;
      let boardClone = deepCopyArray(board);
      boardClone[move[0]][move[1]] = playerPiece;
      let output = aplhaBetaPruning(
        boardClone,
        !isMax,
        alpha,
        beta,
        !playerPiece,
        numTurns + 1,
        depth + 1,
        move,
        searchDepth
      );

      bestVal = Math.min(bestVal, output);
      beta = Math.min(beta, bestVal);

      if (alpha >= beta) {
        break;
      }
    }
    return bestVal;
  }
}

function deepCopyArray(board) {
  var output = [];

  for (var i of board) {
    output.push([...i]);
  }

  return output;
}

// There are 7 possible options but we need to determine if the move is a valid move
// if move is valid returns a board with the specified move, otherwise it returns null
function placePiece(board, yPos) {
  var moveMade = null;
  var xPos = null;

  for (var i = 5; i > -1; i--) {
    if (board[i][yPos] === null) {
      moveMade = true;
      xPos = i;
      break;
    }
  }

  if (moveMade) {
    return [xPos, yPos];
  } else {
    return null;
  }
}

/*************************************************************
 * Evaluate State  when the depth limit is reached by placing a piece on every position
 * and determening how many winning positions each side has
 *************************************************************/
function evaluateValue(board) {
  var playerValue = 0;
  var aiValue = 0;
  var currentRowValue = 5;

  for (var x = 0; x < 6; x++) {
    currentRowValue--;
    for (var y = 0; y < 7; y++) {
      var newPos = [x, y];

      // if the field is empty
      if (board[x][y] === null) {
        var output = isWin(board, true, newPos);
        if (output) {
          // user win move detected, add to current user score
          playerValue += currentRowValue;
        } else {
          var output = isWin(board, false, newPos);
          if (output) {
            // AI win move detected, add to current ai score
            aiValue += currentRowValue;
          }
        }
      }
    }
  }

  return playerValue - aiValue;
}
