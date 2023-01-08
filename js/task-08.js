const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formsElement = event.currentTarget.elements;

  const yourEmail = formsElement.email.value;
  const yourPassword = formsElement.password.value;

  if (yourEmail === "" || yourPassword === "") {
    alert("Всі поля мають бути заповнені");
  } else {
    event.currentTarget.reset();
  }

  console.log("Email ", yourEmail);
  console.log("Password ", yourPassword);
}
