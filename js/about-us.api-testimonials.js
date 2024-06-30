const response = await fetch("api/testimonials.json");
const apiTestimonials = await response.json();
const element = document.querySelector(".api-testimonials-carousel__inner");
const buttonPrev = document.querySelector(".carousel__button--prev");
buttonPrev.addEventListener("click", prevSlide);
const buttonNext = document.querySelector(".carousel__button--next");
buttonNext.addEventListener("click", nextSlide);
let currentSlide = 0;
renderApiTestimonials(element, apiTestimonials);

async function renderApiTestimonials(element, testimonials) {
  const formattedUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  try {
    const response = await fetch(
      "https://fakerapi.it/api/v1/persons?_quantity=5"
    );
    let users = await response.json();
    if (response.ok && users.data) {
      users = users.data;
      for (let i = 0; i < 5; i++) {
        formattedUsers[i].name = `${users[i].firstname} ${users[i].lastname}`;
      }
    } else {
      for (let i = 0; i < 5; i++) {
        formattedUsers[i].name = "John Doe";
      }
    }
  } catch {
    for (let i = 0; i < 5; i++) {
      formattedUsers[i].name = "John Doe";
    }
  }

  for (let user of formattedUsers) {
    element.innerHTML += `<article class="api-testimonials-carousel__item">
        <div class="api-testimonials-carousel__image">
            <img src="https://thispersondoesnotexist.com" alt="Our client photo">
        </div>
        <div class="api-testimonials-carousel__text">            
            <p class="api-testimonials-carousel__text-body">"${
              testimonials[Math.floor(Math.random() * testimonials.length)].body
            }"</p>
            <p class="api-testimonials-carousel__text-name">&Tab;&mdash; ${
              user.name
            }</p>
        </div>
     </article>`;
  }
  showButtons();
}

function prevSlide() {
  const carouselPosition = `translateX(-${currentSlide * 100 - 100}%)`;
  element.style.transform = carouselPosition;
  currentSlide -= 1;
  showButtons();
}

function nextSlide() {
  const carouselPosition = `translateX(-${currentSlide * 100 + 100}%)`;
  element.style.transform = carouselPosition;
  currentSlide += 1;
  showButtons();
}

function showButtons() {
  currentSlide > 0
    ? (buttonPrev.style.display = "block")
    : (buttonPrev.style.display = "none");
  currentSlide < 4
    ? (buttonNext.style.display = "block")
    : (buttonNext.style.display = "none");
}
