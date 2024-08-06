document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const confirmEmail = document.getElementById("confirmEmail");
  const form = document.getElementById("contactForm");

  confirmEmail.addEventListener("input", function () {
    if (email.value !== confirmEmail.value) {
      confirmEmail.setCustomValidity("Email addresses do not match.");
    } else {
      confirmEmail.setCustomValidity("");
    }
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (email.value === confirmEmail.value) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Please make sure the email addresses match.");
    }
  });
});
