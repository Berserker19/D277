document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirmEmail");

  confirmEmail.addEventListener("input", function () {
    if (email.value !== confirmEmail.value) {
      confirmEmail.setCustomValidity("Email addresses do not match.");
    } else {
      confirmEmail.setCustomValidity("");
    }
  });
});
