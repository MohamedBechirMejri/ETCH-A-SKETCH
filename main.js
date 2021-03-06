let numOfSquares = 16;
const sketchArea = document.getElementById("sketch-area");
const chosenColor = document.getElementById("chosen-color");
const resetButton = document.getElementById("reset");
const numOfSquaresButton = document.getElementById("number-of-squares");
const container = document.getElementById("container");

function createSquares() {
  sketchArea.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
  sketchArea.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;

  for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    const square = document.createElement("div");

    square.classList.add("smooth");
    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = chosenColor.value)
    );
    sketchArea.appendChild(square);
  }
}

function reset() {
  sketchArea.innerHTML = "";
  createSquares();
}

function changeSquareNum() {
  numOfSquares = prompt("Enter Number of Squares (Max 100).", 16);
  numOfSquares > 100 ? (numOfSquares = 100) : "";
  sketchArea.innerHTML = "";
  createSquares();
}
container.addEventListener("transitionend", () => {
  container.classList.remove("shaken");
});

resetButton.addEventListener("click", () => {
  container.classList.add("shaken");
  setTimeout(reset, 450); //sync shaking with reset
});

numOfSquaresButton.addEventListener("click", changeSquareNum);

createSquares();
