const itemEl = document.querySelectorAll(".item");

console.log("number of categories", itemEl.length);
console.log("");

itemEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.childElementCount);
  console.log("");
});
