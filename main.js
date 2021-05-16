let numOfSquares = 16;
const sketchArea = document.getElementById("sketch-area");
const chosenColor = document.getElementById("chosen-color");

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
createSquares();

const resetButton = document.getElementById("reset");
const numOfSquaresButton = document.getElementById("number-of-squares");

sketchArea.addEventListener("transitionend", () =>
  // TODO fix this
  sketchArea.classList.remove("shaken")
);

resetButton.addEventListener("click", () => {
  sketchArea.classList.add("shaken");
  sketchArea.innerHTML = "";
  createSquares();
});
