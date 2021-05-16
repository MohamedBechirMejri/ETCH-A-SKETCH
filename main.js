let numOfSquares = 16;
let sketchArea = document.getElementById("sketch-area");
let chosenColor = document.getElementById("chosen-color");

function createSquares(numOfSquares) {
  for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    let square = document.createElement("div");
    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = chosenColor.value)
    );
    sketchArea.appendChild(square);
  }
  sketchArea.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
  sketchArea.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;
}
createSquares(numOfSquares);
