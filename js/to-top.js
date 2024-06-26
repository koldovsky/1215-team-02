let toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", scrollFunction )

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}
toTopBtn.addEventListener("click", topFunction)

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
