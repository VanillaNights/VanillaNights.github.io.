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


function menu_bar_toggle() {
  const button = document.querySelector(".menu-button");
  const start = button.getBoundingClientRect();

  document.body.classList.toggle("menu_bar_change");

  requestAnimationFrame(() => {
    const end = button.getBoundingClientRect();

    button.animate(
      [
        {
          transform: `translate(${start.left - end.left}px, ${start.top - end.top}px)`
        },
        { transform: "translate(0, 0)" }
      ],
      { duration: 400, easing: "ease-out" }
    );
  });
}