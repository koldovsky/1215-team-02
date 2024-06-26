function init() {
  import("./menu-btn.js");
  import("./theme.js");
  import("./index.services-carousel.js")
  import("./index.testimonials-carousel.js");
  import("./to-top.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
