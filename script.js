document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // clear all old error messages first
    document.querySelectorAll(".error-text").forEach(span => span.textContent = "");
    let valid = true;

    // Name
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("err-name").textContent = "Please enter your name.";
      valid = false;
    }

    // Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (email === "") {
      document.getElementById("err-email").textContent = "Please enter your email.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("err-email").textContent = "Enter a valid email.";
      valid = false;
    }

    // Username
    const username = document.getElementById("username").value.trim();
    const userPattern = /^[A-Za-z0-9_]{3,16}$/;
    if (!userPattern.test(username)) {
      document.getElementById("err-username").textContent =
        "3 - 16 letters, numbers, or underscore.";
      valid = false;
    }

     const worthChecked = document.querySelector('input[name="worth"]:checked');
    if (!worthChecked) {
      document.getElementById("err-worth").textContent = "Please choose one option.";
      valid = false;
    }

     });
});