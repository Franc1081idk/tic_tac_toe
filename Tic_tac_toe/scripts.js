const cells = document.querySelectorAll(".cells");
const playerTurn = document.getElementById("playerturn1");
const wincondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

playerTurn.textContent = "X's Turn";

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => cellClick(index));
});

function cellClick(index) {
  if (!running || options[index] !== "") return;
  options[index] = currentPlayer;
  cells[index].textContent = currentPlayer;
  changePlayer();
  checkWinner();
}

function changePlayer() {
  if (running) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerTurn.textContent = `${currentPlayer}'s Turn`;
  }
}

function checkWinner() {
  for (const [a, b, c] of wincondition) {
    if (options[a] && options[a] === options[b] && options[a] === options[c]) {
      playerTurn.textContent = `Player ${options[a]} wins!`;
      running = false;
      return;
    }
  }
  if (!options.includes("")) {
    playerTurn.textContent = "Draw!";
    running = false;
  }
}
function restart() {
  if (!running) {
    options = ["", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    for (i = 0; i < cells.length; i++) {
      cells[i].textContent = "";
    }
    playerTurn.textContent = `${currentPlayer}'s Turn`;
    running = true;
  }
}
