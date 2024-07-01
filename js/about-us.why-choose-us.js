const  listItems = document.querySelector(".why-choose-us__list")
listItems.addEventListener(
    "mousedown",
    (event) => {
      event.target.style.color = "#8d99ff";
       setTimeout(() => {
        event.target.style.color = "";
      }, 300);
    },
    false,
  );
