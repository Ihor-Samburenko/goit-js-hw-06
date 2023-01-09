function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControls = document.querySelector("#controls");
const addColection = document.querySelector("[data-create]");
const removeColection = document.querySelector("[data-destroy]");
const clearBox = document.querySelector("#boxes");
const inputValue = document.querySelector("#controls input");

addColection.addEventListener("click", getAmount);
removeColection.addEventListener("click");

function getAmount() {
  const amount = inputValue.value;
}

function createBoxes(amount) {
  const basicSize = 30;

  for (i = 0; i < amount; i++) {
    let newSize = basicSize + i * 10;
    let newDiv = document.createElement("div");
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
