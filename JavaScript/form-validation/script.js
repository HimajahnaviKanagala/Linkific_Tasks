const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});
function validateInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  let isValid = true;

  if (nameValue === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else {
    showError(nameInput, "");
  }

  if (emailValue === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!validateEmail(emailValue)) {
    showError(emailInput, "Enter valid email");
    isValid = false;
  } else {
    showError(emailInput, "");
  }

  if (passwordValue.length < 6) {
    showError(passwordInput, "Password should be at least 6 characters");
    isValid = false;
  } else {
    showError(passwordInput, "");
  }
  if (isValid) {
    form.reset();
    alert("Form submitted successfully!");
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".error");
  small.textContent = message;
}

function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email);
}
