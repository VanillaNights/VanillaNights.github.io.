function drop() {
  const menu = document.getElementById("myDropdown");
  const button = document.querySelector(".dropbtn");
  const isOpen = menu.classList.toggle("show");

  button.setAttribute("aria-expanded", isOpen);
}

window.onclick = function (event) {
  if (!event.target.closest(".dropdown")) {
    document.getElementById("myDropdown").classList.remove("show");
    document.querySelector(".dropbtn").setAttribute("aria-expanded", "false");
  }
};