class Board {
  constructor(numRows, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.remainingShips = numShips;
    this.grid = this.populateGrid();
    this.publicGrid = this.populatePublicGrid();
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let grid = [];
    for (let i = 0; i < this.numRows; i++) {
      let row = [];
      for (let i = 0; i < this.numCols; i++) {
        row.push(null);
      }
      grid.push(row);
    }
    // ships
    for (let i = 0; i < this.numShips; i++) {
      let setShip = true;
      while (setShip) {
        let randomRow = Math.floor(Math.random() * this.numRows);
        let randomCol = Math.floor(Math.random() * this.numCols);
        let index = grid[randomRow][randomCol];
        if (index === null) {
          // console.log(randomRow, randomCol);
          grid[randomRow][randomCol] = "s";
          setShip = false;
        }
        // console.log(grid);
      }
    }
    // console.log(grid);
    return grid;
  }

  populatePublicGrid() {
    let publicGrid = [];
    for (let i = 0; i < this.numRows; i++) {
      let row = [];
      for (let i = 0; i < this.numCols; i++) {
        row.push("~");
      }
      publicGrid.push(row);
    }
    return publicGrid;
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    console.table(this.publicGrid);
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
    return this.remainingShips;
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    let [row, col] = pos;
    return (row < this.numRows) && (row >= 0) && (col < this.numCols) && (col >= 0);
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
    return this.count() === 0;
  }

  attack(pos) {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
    console.log(pos);
    let [row, col] = pos;
    let index = this.grid[row][col];
    let publicIndex = this.publicGrid[row][col];
    if (index === "s") {
      // console.log("hit");
      this.grid[row][col] = "h";
      this.publicGrid[row][col] = "h"
      this.remainingShips--;
    }
    else {
      // console.log("miss");
      this.grid[row][col] = "x";
      this.publicGrid[row][col] = "x";
    }
  }
}

module.exports = Board;
