document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  function val(id) { return document.getElementById(id).value.trim(); }
  function setErr(id, msg) { document.getElementById(id).textContent = msg; }
  function clearAllErrors() {
    document.querySelectorAll(".error-text").forEach(el => el.textContent = "");
  } 
});