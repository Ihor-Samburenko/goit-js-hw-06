const sizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sizeEl.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}

// function handleInputRange(event) {
//   textEl.style.fontSize = `${sizeEl.value}px`;
// }
