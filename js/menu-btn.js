const mobileMeny = document.querySelector(".js-menu-container");
const openMenyBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
const body = document.body;

const toggleMenu = () => {
  const isMenuOpen =
    openMenyBtn.getAttribute("aria-expanded") === "true" || false;
  openMenyBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMeny.classList.toggle("is-open");

  if (!isMenuOpen) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
};

openMenyBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMeny.classList.remove("is-open");
  openMenyBtn.setAttribute("aria-expanded", false);
  body.classList.remove("no-scroll");
});
