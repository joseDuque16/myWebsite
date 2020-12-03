// determines optimal move
export function miniMax(board, playerPiece) {
  // Find the remaining possible moves
  var remainder = [];
  for (let i in board) {
    if (board[i] === null) {
      remainder.push(parseInt(i));
    }
  }

  // No current winner -- perform minimax algorithm
  var remainderValues = [];

  for (let i in remainder) {
    // Call the min max function for all possible moves
    var remainderClone = [...remainder];
    var boardClone = [...board];
    boardClone[remainder[i]] = playerPiece;
    remainderClone.splice(i, 1);
    remainderValues.push(miniMaxRecur(false, boardClone, remainderClone, !playerPiece));
  }

  console.log("🚀 ~ file: TicTacToeAI.js ~ line 32 ~ miniMax ~ remainderValues", remainderValues);

  // Determine which move had the best likely hood of wining (max value)
  var max = Number.MIN_SAFE_INTEGER;
  var maxIdx = -1;
  for (var i in remainder) {
    if (remainderValues[i] > max) {
      max = remainderValues[i];
      maxIdx = remainder[i];
    }
  }

  return maxIdx;
}

/*******************************************************************
 *        Determine the next best move by analyzing all moves
 ******************************************************************/
function miniMaxRecur(isMax, board, remaining, playerPiece) {
  //console.log("🚀 ~ file: TicTacToeAI.js ~ line 43 ~ miniMaxRecur ~ remaining", remaining);
  //console.log("🚀 ~ file: TicTacToeAI.js ~ line 43 ~ miniMaxRecur ~ board", board);
  var remainingValues = [];
  var stateVal;
  var remainingMoves = remaining.length;

  // Step 1 - find a value associated with this particular state win is +10 if the previous player was isMax, -10 if the previous player was !isMax (isMin)
  // Note -- only check board status after the first 4 moves to save computation time
  // Player = !isMax because isMax = true means AI, and false is player
  if (remainingMoves < 5) {
    stateVal = findWinner(board, !playerPiece); // check if the last player moves was a win
    if (stateVal === true) {
      // true means that the currrent player has won
      return isMax ? -10 + remainingMoves : 10 - remainingMoves;
    }
  }

  // if remaining moves is 0, the return 0
  if (remainingMoves === 0) {
    return 0;
  }

  // Keep iterating down the recursion tree to find the output at each level
  for (var i in remaining) {
    var boardClone = [...board];
    var remainingClone = [...remaining];
    boardClone[remaining[i]] = playerPiece;
    remainingClone.splice(i, 1);
    remainingValues.push(miniMaxRecur(!isMax, boardClone, remainingClone, !playerPiece));
  }

  // Return the max/min values depending on whos turn it is
  if (isMax) {
    return Math.max.apply(Math, remainingValues);
  } else {
    return Math.min.apply(Math, remainingValues);
  }
}

// Function called to check if there is a winner
//TRUE is WInner, False is no Winner, null is Draw
function findWinner(board, playerPiece) {
  // checks wether the player or computer have a winning move
  var gameWin = false;

  //Number of winning moves = 2+3+3
  if (board[0] === playerPiece && board[1] === playerPiece && board[2] === playerPiece) {
    // first horizontal line
    gameWin = true;
  } else if (board[3] === playerPiece && board[4] === playerPiece && board[5] === playerPiece) {
    // second horizontal line
    gameWin = true;
  } else if (board[6] === playerPiece && board[7] === playerPiece && board[8] === playerPiece) {
    // third horizontal line
    gameWin = true;
  } else if (board[0] === playerPiece && board[3] === playerPiece && board[6] === playerPiece) {
    //first vertical
    gameWin = true;
  } else if (board[1] === playerPiece && board[4] === playerPiece && board[7] === playerPiece) {
    //second vertical
    gameWin = true;
  } else if (board[2] === playerPiece && board[5] === playerPiece && board[8] === playerPiece) {
    //third vertical
    gameWin = true;
  } else if (board[0] === playerPiece && board[4] === playerPiece && board[8] === playerPiece) {
    // \ diagonal
    gameWin = true;
  } else if (board[2] === playerPiece && board[4] === playerPiece && board[6] === playerPiece) {
    // / diagonal
    gameWin = true;
  }

  return gameWin;
}
