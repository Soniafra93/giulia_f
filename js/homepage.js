const toggleButton = document.getElementById("menu-toggle");
const phoneMenu = document.getElementById("phone-menu");

toggleButton.addEventListener("click", () => {
  phoneMenu.classList.toggle("show");
});
