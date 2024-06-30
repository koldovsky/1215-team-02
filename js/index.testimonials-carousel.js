const testimonials = [
  {
    svg: `<svg
          width="100"
          height="100"
          viewBox="-949 951 100 100"
          fill="var(--testimonials-quotes-color)"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="quotesTitle"
          role="img"
        >
          <title id="quotesTitle">Quotes Icon</title>
          <path
            d="M-911.9,964.8h-27.2c-4.1,0-7.4,3.3-7.4,7.4v27.4c0,4.1,3.3,7.4,7.4,7.4h22.1v3.3c0,8-6.5,14.4-14.4,14.4h-6.5c-1.3,0-2.3,1-2.3,2.3v7.8c0,1.3,1,2.3,2.3,2.3h6.5c14.9,0,26.9-12,26.9-26.9v-38.1C-904.5,968.1-907.8,964.8-911.9,964.8z"
          ></path>
          <path
            d="M-858.9,964.8h-27.2c-4.1,0-7.4,3.3-7.4,7.4v27.4c0,4.1,3.3,7.4,7.4,7.4h22.1v5.6c0,6.7-5.4,12.1-12.1,12.1h-8.9c-1.3,0-2.3,1-2.3,2.3v7.8c0,1.3,1,2.3,2.3,2.3h8.9c13.6,0,24.6-11,24.6-24.6v-40.4C-851.5,968.1-854.8,964.8-858.9,964.8z"
          ></path>
        </svg>`,
    text: `"I AM GLAD THAT WE DECIDED TO TRANSFER ALL PROCESSES RELATED TO
        PERSONNEL MANAGEMENT AND RECRUITMENT TO HR PARTNER.THE
        PROFESSIONALS KNOW HOW TO FIND PERFECT IDEAL FOR OPEN POSITIONS
        AND MAKE EVERY EMPLOYEE IN OUR COMPANY FEEL SPECIAL."`,
    author: `JOHN PETERSON`,
    jobTitle: `- CEO AT FRESH FOOD CO.`,
  },
  {
    svg: `<svg
          width="100"
          height="100"
          viewBox="-949 951 100 100"
          fill="var(--testimonials-quotes-color)"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="quotesTitle"
          role="img"
        >
          <title id="quotesTitle">Quotes Icon</title>
          <path
            d="M-911.9,964.8h-27.2c-4.1,0-7.4,3.3-7.4,7.4v27.4c0,4.1,3.3,7.4,7.4,7.4h22.1v3.3c0,8-6.5,14.4-14.4,14.4h-6.5c-1.3,0-2.3,1-2.3,2.3v7.8c0,1.3,1,2.3,2.3,2.3h6.5c14.9,0,26.9-12,26.9-26.9v-38.1C-904.5,968.1-907.8,964.8-911.9,964.8z"
          ></path>
          <path
            d="M-858.9,964.8h-27.2c-4.1,0-7.4,3.3-7.4,7.4v27.4c0,4.1,3.3,7.4,7.4,7.4h22.1v5.6c0,6.7-5.4,12.1-12.1,12.1h-8.9c-1.3,0-2.3,1-2.3,2.3v7.8c0,1.3,1,2.3,2.3,2.3h8.9c13.6,0,24.6-11,24.6-24.6v-40.4C-851.5,968.1-854.8,964.8-858.9,964.8z"
          ></path>
        </svg>`,
    text: `"THE HIGHEST PROFESSIONALISM, INDIVIDUAL APPROACH AND AFFORDABLE
        PRICES - THIS IS ALL ABOUT HR PARTNER. WE ENTRUSTED THIS COMPANY
        WITH ALL RECRUITMENT PROCESSES AND WERE ABLE TO CONCENTRATE ON
        OUR BUSINESS OPERATION."`,
    author: `JANE WILLIAMS`,
    jobTitle: `- MANAGING DIRECTOR AT WOLLAR S.T.`,
  },
  {
    svg: `<svg
          width="100"
          height="100"
          viewBox="-949 951 100 100"
          fill="var(--testimonials-quotes-color)"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="quotesTitle"
          role="img"
        >
          <title id="quotesTitle">Quotes Icon</title>
          <path
            d="M-911.9,964.8h-27.2c-4.1,0-7.4,3.3-7.4,7.4v27.4c0,4.1,3.3,7.4,7.4,7.4h22.1v3.3c0,8-6.5,14.4-14.4,14.4h-6.5c-1.3,0-2.3,1-2.3,2.3v7.8c0,1.3,1,2.3,2.3,2.3h6.5c14.9,0,26.9-12,26.9-26.9v-38.1C-904.5,968.1-907.8,964.8-911.9,964.8z"
          ></path>
          <path
            d="M-858.9,964.8h-27.2c-4.1,0-7.4,3.3-7.4,7.4v27.4c0,4.1,3.3,7.4,7.4,7.4h22.1v5.6c0,6.7-5.4,12.1-12.1,12.1h-8.9c-1.3,0-2.3,1-2.3,2.3v7.8c0,1.3,1,2.3,2.3,2.3h8.9c13.6,0,24.6-11,24.6-24.6v-40.4C-851.5,968.1-854.8,964.8-858.9,964.8z"
          ></path>
        </svg>`,
    text: `"ONE OF THE MOST PAINFUL PROBLEMS IN MY WORK HAS ALWAYS BEEN
        PERSONNEL MANAGEMENT. I SIMPLY DO NOT HAVE ENOUGH TIME TO HEAR
        THE WISHES OF THE EMPLOYEES. HR PARTNER HELPED ME STREAMLINE
        INTERNAL PROCESSES AND MAKE MY EMPLOYEES HAPPIER."`,
    author: `DEAN PHILLIPS`,
    jobTitle: `- CEO AT WORLD TRUCKS & CO.`,
  },
];

testimonials.forEach((item) => {
  const carousel = document.querySelector(".testimonials__articles");
  const html = `<article class="testimonials__item">
      <div class="testimonials__quotes-svg">
        ${item.svg}
      </div>
      <p class="testimonials__text">
        ${item.text}
      </p>
      <p class="testimonials__author">
        ${item.author}
        <span class="testimonials__author-title">${item.jobTitle}</span>
      </p>
    </article>`;
  carousel.innerHTML += html;
});

let currentSlide = 0;

renderIndicators();

function moveSlide(direction) {
  const slides = document.querySelectorAll(".testimonials__item");
  const totalSlides = slides.length;

  if (currentSlide === 0 && direction === -1) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide === totalSlides - 1 && direction === 1) {
    currentSlide = 0;
  } else {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  }
  updateCarousel();
}

function updateCarousel() {
  const carouselInner = document.querySelector(".testimonials__articles");
  const offset = -currentSlide * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;

  updateIndicators();
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".testimonials__indicator");
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("testimonials__indicator-active");
    } else {
      indicator.classList.remove("testimonials__indicator-active");
    }
  });
}

document
  .querySelector(".testimonials__arrow--left")
  .addEventListener("click", () => moveSlide(-1));
document
  .querySelector(".testimonials__arrow--right")
  .addEventListener("click", () => moveSlide(1));

function renderIndicators() {
  const slides = document.querySelectorAll(".testimonials__item");
  let indicatorsHtml = "";

  for (let i = 0; i < slides.length; i++) {
    indicatorsHtml += `<button class="testimonials__indicator ${
      i === currentSlide ? "testimonials__indicator-active" : ""
    }" data-slide="${i}"></button>`;
  }

  const indicatorsContainer = document.querySelector(
    ".testimonials__carousel-indicators"
  );
  indicatorsContainer.innerHTML = indicatorsHtml;

  const indicators = document.querySelectorAll(".testimonials__indicator");
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", (e) => {
      const slideTo = parseInt(e.target.getAttribute("data-slide"));
      moveSlide(slideTo - currentSlide);

      indicators.forEach((ind) =>
        ind.classList.remove("testimonials__indicator-active")
      );

      e.target.classList.add("testimonials__indicator-active");
    });
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => moveSlide(1), 3000); 
}
startAutoSlide();
