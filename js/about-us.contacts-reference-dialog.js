const dialog = document.querySelector(".contacts-reference__dialog");
const openButton = document.querySelector(".contacts-reference__link");
const closeButton = document.querySelector(".contacts-reference__dialog-close");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
