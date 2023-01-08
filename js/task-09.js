const Btn = document.querySelector(".change-color");
const changeColorEl = document.querySelector(".color");

Btn.addEventListener("click", changeColor);

function changeColor() {
  let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  changeColorEl.textContent = hexColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
