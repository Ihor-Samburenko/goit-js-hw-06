const inputEl = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  nameLabel.textContent = event.target.value;

  if (event.target.value === "") {
    nameLabel.textContent = "Anonymous";
  }
}
