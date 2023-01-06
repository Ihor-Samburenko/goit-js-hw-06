const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((text) => {
  const ingrEl = document.createElement("li");
  ingrEl.textContent = text;
  ingrEl.classList.add("item");
  ingredientsList.append(ingrEl);
});
