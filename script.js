document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

   function isNotEmpty(s) {
    return s.length > 0;
  }
  function isValidEmail(s) {
   
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }
  function isValidUsername(s) {
   
    return /^[A-Za-z0-9_]{3,16}$/.test(s);
  }
  function radioChecked(name) {
    return !!document.querySelector(`input[name="${name}"]:checked`);
  }
  function anyChecked(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]`)).some(
      (i) => i.checked
    );
  }
  function selected(selectId) {
    return val(selectId) !== "";
  }
  function hasDate(id) {
    return val(id) !== ""; // basic "not empty" check for the date field
  }

});