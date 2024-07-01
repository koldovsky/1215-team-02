const response = await fetch("api/testimonials.json");
const apiTestimonials = await response.json();
const element = document.querySelector(".api-testimonials-carousel__inner");
const buttonPrev = document.querySelector(".carousel__button--prev");
buttonPrev.addEventListener("click", prevSlide);
const buttonNext = document.querySelector(".carousel__button--next");
buttonNext.addEventListener("click", nextSlide);
let currentSlide = 0;
let slideInterval;

renderApiTestimonials(element, apiTestimonials);

async function renderApiTestimonials(element, testimonials) {
  const formattedUsers = [];
  for (let step = 0; step < 5; step++) {
    formattedUsers.push(
      testimonials[Math.floor(Math.random() * testimonials.length)]
    );
  }

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
            <img src=${user.photo} alt="Our client photo">
        </div>
        <div class="api-testimonials-carousel__text">            
            <p class="api-testimonials-carousel__text-body">"${user.body}"</p>
            <p class="api-testimonials-carousel__text-name">&Tab;&mdash; ${user.name}</p>
        </div>
     </article>`;
  }
  updateCarousel(currentSlide);
}

function prevSlide() {
  currentSlide -= 1;
  if (currentSlide < 0) {
    currentSlide = 4;
  }
  updateCarousel(currentSlide);
}

function nextSlide() {
  currentSlide += 1;
  if (currentSlide > 4) {
    currentSlide = 0;
  }
  updateCarousel(currentSlide);
}

function showButtons() {
  currentSlide > 0
    ? (buttonPrev.style.display = "block")
    : (buttonPrev.style.display = "none");
  currentSlide < 4
    ? (buttonNext.style.display = "block")
    : (buttonNext.style.display = "none");
}

const indicators = Array.from(
  document.querySelectorAll(".api-testimonials-carousel__indicator")
);

for (let indicator of indicators) {
  indicator.addEventListener("click", () =>
    indicatorClick(indicators.indexOf(indicator))
  );
}

function showIndicators() {
  for (let indicator of indicators) {
    indicators.indexOf(indicator) === currentSlide
      ? indicator.classList.add("active")
      : indicator.classList.remove("active");
  }
}

function indicatorClick(index) {
  currentSlide = index;
  updateCarousel(currentSlide);
}

function updateCarousel(currentSlide) {
  const carouselPosition = `translateX(-${currentSlide * 100}%)`;
  element.style.transform = carouselPosition;
  showButtons();
  showIndicators();
  resetInterval();
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}
