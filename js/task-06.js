const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", inputBlur);
console.log(inputEl.dataset.length);
function inputBlur(event) {
  //   console.log(inputEl.value.length);
  if (Number(inputEl.dataset.length) === event.target.value.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
