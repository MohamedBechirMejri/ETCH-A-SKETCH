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

    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = chosenColor.value)
    );
    sketchArea.appendChild(square);
  }
}

sketchArea.addEventListener("transitionend", () =>
  // TODO fix this
  container.classList.toggle("shaken")
);

resetButton.addEventListener("click", () => {
  container.classList.toggle("shaken");
  sketchArea.innerHTML = "";
  createSquares();
});

numOfSquaresButton.addEventListener("click", () => {
  numOfSquares = prompt("Enter Number of Squares", 16);
  sketchArea.innerHTML = "";
  createSquares();
});

createSquares();
