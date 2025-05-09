document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");

  logo.addEventListener("click", () => {
    logo.classList.toggle("animato");
  });
});
