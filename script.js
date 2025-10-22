document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    // Question 1: at least one radio selected
    const radios = document.querySelectorAll('input[name="worth"]');
    let radioSelected = false;
    for (const radio of radios) {
      if (radio.checked) {
        radioSelected = true;
        break;
      }
    }
    if (!radioSelected) {
      alert("Please answer Question 1: Is going to Cancún worth it?");
      event.preventDefault();
      return;
    }

    // Question 2: at least one checkbox selected
    const checkboxes = document.querySelectorAll('input[name="interest"]');
    let boxChecked = false;
    for (const box of checkboxes) {
      if (box.checked) {
        boxChecked = true;
        break;
      }
    }
    if (!boxChecked) {
      alert("Please answer Question 2: Select at least one interest.");
      event.preventDefault();
      return;
    }

    // Question 3: textarea not empty
    const comments = document.getElementById("comments");
    if (comments.value.trim() === "") {
      alert("Please answer Question 3: Tell us why or why not Cancún is worth visiting.");
      event.preventDefault();
      return;
    }

    // If everything is fine
    alert("Thank you for completing the survey!");
  });
});