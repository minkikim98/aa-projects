let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", ""];
let gameStatus = "";

let header = document.getElementById("game-status");
let newGameButton = document.getElementById("new-game");
let giveUpButton = document.getElementById("give-up");

function checkEqual(val1, val2, val3) {
  if (squareValues[val1] !== "" &&
      squareValues[val1] === squareValues[val2] && 
      squareValues[val2] === squareValues[val3]) return true;
  return false;
}

function checkFull() {
  for (let i = 0; i < squareValues.length; i++) {
    if (squareValues[i] === "") return false;
  }
  return true;
}

function checkGameStatus() {
  if (checkEqual(0, 1, 2)) gameStatus = squareValues[0].toUpperCase();
  else if (checkEqual(3, 4, 5)) gameStatus = squareValues[3].toUpperCase();
  else if (checkEqual(6, 7, 8)) gameStatus = squareValues[6].toUpperCase();
  else if (checkEqual(0, 3, 6)) gameStatus = squareValues[0].toUpperCase();
  else if (checkEqual(1, 4, 7)) gameStatus = squareValues[1].toUpperCase();
  else if (checkEqual(2, 5, 8)) gameStatus = squareValues[2].toUpperCase();
  else if (checkEqual(0, 4, 8)) gameStatus = squareValues[4].toUpperCase();
  else if (checkEqual(2, 4, 6)) gameStatus = squareValues[6].toUpperCase();
  else if (checkFull()) gameStatus = "None";
  if (gameStatus !== "") {
    header.innerHTML = "Winner: " + gameStatus;
    newGameButton.removeAttribute("disabled");
    giveUpButton.setAttribute("disabled", true);
  }
}

function saveGameState() {
  localStorage.setItem("tttBoard", JSON.stringify(squareValues));
  localStorage.setItem("tttStatus", gameStatus);
  localStorage.setItem("tttCurrent", currentPlayerSymbol);
}

function loadGameState() {
  let status = localStorage.getItem("tttStatus");
  let board = localStorage.getItem("tttBoard");
  let current = localStorage.getItem("tttCurrent");
  if (status === null || board === null || current === null) return;
  
  let boardArr = JSON.parse(board);

  currentPlayerSymbol = current;
  squareValues = boardArr;
  gameStatus = status;

  for (let i = 0; i < 9; i++) {
    if (squareValues[i] !== "") {
      let square = document.getElementById("square-" + i);
      let img = document.createElement("img");
      img.setAttribute("src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-" + squareValues[i] + ".svg");
      square.appendChild(img);
    }
  }
  if (gameStatus) {
    header.innerHTML = "Winner: " + gameStatus;
    newGameButton.removeAttribute("disabled");
    giveUpButton.setAttribute("disabled", true);
  } 
  else {
    header.innerHTML = "";
    newGameButton.setAttribute("disabled", true);
    giveUpButton.removeAttribute("disabled");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadGameState();
  
  let grid = document.getElementById("tic-tac-toe-board");
  
  grid.addEventListener("click", event => {
    if (gameStatus !== "") return;

    if (event.target.id.startsWith("square-")) {
      let squareNum = Number(event.target.id[7]);
      if (squareValues[squareNum] === "") {
        let img = document.createElement("img");
        img.setAttribute("src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-" + currentPlayerSymbol + ".svg");
        event.target.appendChild(img);
        squareValues[squareNum] = currentPlayerSymbol;
        currentPlayerSymbol = currentPlayerSymbol === "x" ? "o" : "x";
        checkGameStatus();
        saveGameState();
      }
    }
  });

  newGameButton.addEventListener("click", event => {
    currentPlayerSymbol = "x";
    squareValues = ["", "", "", "", "", "", "", "", ""];
    gameStatus = "";
    header.innerHTML = "";
    for (let i = 0; i < 9; i++) {
      let square = document.getElementById("square-" + i);
      square.innerHTML = "";
    }
    newGameButton.setAttribute("disabled", true);
    giveUpButton.removeAttribute("disabled");
    saveGameState();
  });

  giveUpButton.addEventListener("click", event => {
    gameStatus = currentPlayerSymbol === "x" ? "O" : "X";
    header.innerHTML = "Winner: " + gameStatus;
    newGameButton.removeAttribute("disabled");
    giveUpButton.setAttribute("disabled", true);
    saveGameState();
  });

});