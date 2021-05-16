let numOfSquares = 16;
let sketchArea = document.getElementById("sketch-area");
let chosenColor = document.getElementById("chosen-color");

function createSquares() {
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
createSquares();

let resetButton = document.getElementById("reset");
let numOfSquaresButton = document.getElementById("number-of-squares");

sketchArea.addEventListener("transitionend", () =>  // TODO fix this
  sketchArea.classList.remove("shaken")
);

resetButton.addEventListener("click", () => {
  sketchArea.classList.add("shaken");
  sketchArea.innerHTML = "";
  createSquares();
});
