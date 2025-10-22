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
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("err-email").textContent = "Please enter your email.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("err-email").textContent = "Enter a valid email.";
        valid = false;
    } else {
        document.getElementById("err-email").textContent = "";
    }

    const worthChecked = document.querySelector('input[name="worth"]:checked');
    if (!worthChecked) {
        document.getElementById("err-worth").textContent = "Please choose one option.";
        valid = false;
    }

    const interestChecked = document.querySelectorAll('input[name="interest"]:checked');
    if (interestChecked.length === 0) {
        document.getElementById("err-interest").textContent =
            "Select at least one reason.";
        valid = false;
    }

    const focus = document.getElementById("focus").value;
    if (focus === "") {
        document.getElementById("err-focus").textContent = "Please select a trip focus.";
        valid = false;
    }

     if (!valid) {
        event.preventDefault();
    }

     });
});