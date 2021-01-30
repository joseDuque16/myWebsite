export function solveSudoku(board, solveSudoku) {
  console.log(board);
  let quickMapRow = [];
  let quickMapCol = [];
  let squares = [];
  let marginsX = [
    [0, 3],
    [0, 3],
    [0, 3],
    [3, 6],
    [3, 6],
    [3, 6],
    [6, 9],
    [6, 9],
    [6, 9],
  ];
  let marginsY = [
    [0, 3],
    [3, 6],
    [6, 9],
    [0, 3],
    [3, 6],
    [6, 9],
    [0, 3],
    [3, 6],
    [6, 9],
  ];
  let emptySquares = 0;
  let squareMap = {};

  if (solveSudoku) {
    return checkWin(board, marginsX, marginsY);
  }

  // Create a Row Map & Col Map
  for (let x = 0; x < 9; x++) {
    let count = { count: 0, vals: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]), row: x };
    let count2 = { count: 0, vals: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]), col: x };
    for (let y = 0; y < 9; y++) {
      // map the quick map row values
      if (board[x][y] !== "-") {
        count.count++;
        count.vals.delete(parseInt(board[x][y]));
      } else {
        emptySquares++;
      }
      // map the quick map col values
      if (board[y][x] !== "-") {
        count2.count++;
        count2.vals.delete(parseInt(board[y][x]));
      }

      // map the squares
      let squarePos = 0;
      if (x >= 0 && x < 3 && y >= 0 && y < 3) {
        squarePos = 0;
      } else if (x >= 0 && x < 3 && y >= 3 && y < 6) {
        squarePos = 1;
      } else if (x >= 0 && x < 3 && y >= 6 && y < 9) {
        squarePos = 2;
      } else if (x >= 3 && x < 6 && y >= 0 && y < 3) {
        squarePos = 3;
      } else if (x >= 3 && x < 6 && y >= 3 && y < 6) {
        squarePos = 4;
      } else if (x >= 3 && x < 6 && y >= 6 && y < 9) {
        squarePos = 5;
      } else if (x >= 6 && x < 9 && y >= 0 && y < 3) {
        squarePos = 6;
      } else if (x >= 6 && x < 9 && y >= 3 && y < 6) {
        squarePos = 7;
      } else if (x >= 6 && x < 9 && y >= 6 && y < 9) {
        squarePos = 8;
      }

      squareMap[x + "" + y] = squarePos;
    }
    quickMapRow.push(count);
    quickMapCol.push(count2);
  }

  // fill up the missing squares
  for (var i = 0; i < 9; i++) {
    let marginX = marginsX[i];
    let marginY = marginsY[i];
    let square = { count: 0, vals: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]), square: i };

    for (var x = marginX[0]; x < marginX[1]; x++) {
      for (var y = marginY[0]; y < marginY[1]; y++) {
        if (board[x][y] !== "-") {
          square.count++;
          square.vals.delete(parseInt(board[x][y]));
        }
      }
    }

    squares.push(square);
  }

  /// Sort all of the row, col, and square collections
  quickMapRow.sort((a, b) => {
    return b.count - a.count;
  });
  quickMapCol.sort((a, b) => {
    return b.count - a.count;
  });

  // For identifying the next best move: see what is bigger x+y or a square
  board = recurseFill(
    quickMapRow,
    quickMapCol,
    squares,
    emptySquares,
    board,
    marginsX,
    marginsY,
    squareMap
  );

  return board;
}

function recurseFill(xMap, yMap, squares, unfilled, board, marginsX, marginsY, squareMap) {
  /*******************************************************************/
  //                  Sort the xMaps and yMaps
  /*******************************************************************/
  let output = null;
  xMap.sort((a, b) => {
    if (b.count === 9) return -1;
    if (a.count === 9) return 1;
    else return b.count - a.count;
  });
  yMap.sort((a, b) => {
    if (b.count === 9) return -1;
    if (a.count === 9) return 1;
    else return b.count - a.count;
  });

  if (unfilled === 0) {
    // Check if there is a win
    if (checkWin(board, marginsX, marginsY)) {
      return board;
    } else {
      return null;
    }
  }

  /*******************************************************************/
  //          Pick the best option for the next input
  /*******************************************************************/
  let bestIntersection;
  let bestCords;
  let bestIdxs;
  let minOptions = 10;
  let bestSquare;

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      let curX = xMap[x].row;
      let curY = yMap[y].col;
      let curSquare = squareMap[curX + "" + curY];

      if (board[curX][curY] !== "-") continue;

      let xyIntersect = new Set([...xMap[x].vals].filter((z) => yMap[y].vals.has(z)));
      let xySquareIntersect = new Set(
        [...xyIntersect].filter((z) => squares[curSquare].vals.has(z))
      );

      // better option is found - store it
      if (xySquareIntersect.size < minOptions) {
        bestCords = [curX, curY];
        bestIdxs = [x, y];
        bestIntersection = new Set(xySquareIntersect);
        minOptions = xySquareIntersect.size;
        bestSquare = curSquare;
      }
    }
  }

  /*******************************************************************/
  //          iterate through all possible values for this position
  /*******************************************************************/
  for (let item of bestIntersection) {
    let xMapClone = cloneObject(xMap);
    let yMapClone = cloneObject(yMap);

    xMapClone[bestIdxs[0]].count++;
    xMapClone[bestIdxs[0]].vals.delete(item);
    yMapClone[bestIdxs[1]].count++;
    yMapClone[bestIdxs[1]].vals.delete(item);
    squares[bestSquare].count++;
    squares[bestSquare].vals.delete(item);
    board[bestCords[0]][bestCords[1]] = item.toString();

    output = recurseFill(
      xMapClone,
      yMapClone,
      squares,
      unfilled - 1,
      board,
      marginsX,
      marginsY,
      squareMap
    );

    if (output !== null) {
      return output;
    } else {
      squares[bestSquare].count--;
      squares[bestSquare].vals.add(item);
      board[bestCords[0]][bestCords[1]] = "-";
    }
  }

  return output;
}

/// Clone an object
function cloneObject(myObj) {
  let clone = JSON.parse(JSON.stringify(myObj));

  for (var x = 0; x < clone.length; x++) {
    clone[x].vals = new Set(myObj[x].vals);
  }

  return clone;
}

/*******************************************************************/
////        Check if current full board is a winning board
/*******************************************************************/
function checkWin(board, marginsX, marginsY) {
  // Check the x and y rows
  for (let x = 0; x < 9; x++) {
    let row = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    let col = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    for (let y = 0; y < 9; y++) {
      row.delete(board[x][y]);
      col.delete(board[y][x]);
    }

    if (row.size !== 0 && col.size !== 0) {
      return false;
    }
  }

  // check the squares
  for (var i = 0; i < 9; i++) {
    let marginX = marginsX[i];
    let marginY = marginsY[i];
    let square = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    for (var x = marginX[0]; x < marginX[1]; x++) {
      for (var y = marginY[0]; y < marginY[1]; y++) {
        square.delete(board[x][y]);
      }
    }

    if (square.size !== 0) {
      return false;
    }
  }

  return true;
}
