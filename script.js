const grid = document.querySelector(".grid");
const input_window = document.querySelector(".input-window");
const btn_confirmation = document.querySelector(".btn-confirmation");
const clearBtn = document.querySelector(".reset-btn");

initGrid(16);

clearBtn.addEventListener("click", function () {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  initGrid(16);
});

btn_confirmation.addEventListener("click", () => {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  let newPixelSize = document.querySelector(".input-window").value;
  const gridLayout = newPixelSize * newPixelSize;
  for (let j = 0; j < gridLayout; j++) {
    let newDiv = document.createElement("div");
    grid.appendChild(newDiv);
    newDiv.classList.add("square");

    newDiv.addEventListener("mouseenter", function () {
      newDiv.style.backgroundColor = randomColor();
    });

    grid.style.gridTemplateColumns = `repeat(${newPixelSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${newPixelSize}, 1fr)`;
  }
});

function initGrid(pixelSize) {
  const gridLayout = pixelSize * pixelSize;
  for (let j = 0; j < gridLayout; j++) {
    let newDiv = document.createElement("div");
    grid.appendChild(newDiv);
    newDiv.classList.add("square");

    newDiv.addEventListener("mouseenter", function () {
      newDiv.style.backgroundColor = randomColor();
    });
  }

  grid.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${pixelSize}, 1fr)`;
}

function randomColor() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue}`;
}

function clearGrid() {
  grid.children.backgroundColor = "black";
}
