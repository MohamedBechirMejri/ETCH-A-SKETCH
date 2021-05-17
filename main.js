let numOfSquares = 16;
const sketchArea = document.getElementById("sketch-area");
const chosenColor = document.getElementById("chosen-color");
const resetButton = document.getElementById("reset");
const numOfSquaresButton = document.getElementById("number-of-squares");

function createSquares() {
  for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    const square = document.createElement("div");

    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = chosenColor.value)
    );

    sketchArea.appendChild(square);
  }

  sketchArea.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
  sketchArea.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;
}

sketchArea.addEventListener("transitionend", () =>
  // TODO fix this
  sketchArea.classList.toggle("shaken")
);

resetButton.addEventListener("click", () => {
  sketchArea.classList.toggle("shaken");
  sketchArea.innerHTML = "";

  createSquares();
});

createSquares();
