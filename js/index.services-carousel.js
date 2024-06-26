const services = [
  {
    id: "1",
    image: "img/services/man-watch-video.svg",
    title: "IT Outstaffing",
    text: "Scale up your team fast and get reliable remote developers within a day. We cooperate with hundreds of developers of different skill levels to offer our clients ready teams when needed.",
    list: [
      "Back-end & front-end developers.",
      "QA specialists.",
      "Product managers.",
      "Data scientists & business analysts.",
    ],
  },
  {
    id: "2",
    image: "img/services/people-talk.svg",
    title: "HR Management",
    text: "We handle all staff-related processes. Just focus on your business instead of dealing with bureaucracy. We make sure that your employees are satisfied and perform their duties without any blockers.",
    list: [
      "Signing and storing contracts.",
      "Resolving current issues with employees.",
      "Holding tests and reviews.",
      "Performance management.",
    ],
  },
  {
    id: "3",
    image: "img/services/recruitment.svg",
    title: "Recruitment",
    text: "We search and hire employees for our clients. We get a clear job description from you and find the best specialists. We also provide headhunting and executive search services for companies.",
    list: [
      "Talent acquisition.",
      "Sourcing of candidates.",
      "Processing requests.",
      "Conducting interviews.",
    ],
  },
  {
    id: "4",
    image: "img/services/man-thinking.svg",
    title: "Consulting",
    text: "We provide consulting services for our clients. If you need help in developing the HR strategy, internal corporate policies, job descriptions, any company rules, and other documents, you can contact us.",
    list: [
      "HR strategy.",
      "Development of internal documents.",
      "Staff assessment.",
      "Job descriptions.",
    ],
  },
];
let currentIdx = 0;
function renderServices(services) {
  let servicesHtml = "";
  for (const service of services) {
    let listHtml = "";
    for (const item of service.list) {
      listHtml += `
        <li class="carousel-services__content__list-item">
          <span class="check-icon"></span>
          <p class="carousel-services__content__list-item-text">
            ${item}
          </p>
        </li>`;
    }
    servicesHtml += `
      <div class="carousel-services__content">
        <img
          src="${service.image}"
          alt="${service.title}"
        />
        <h3 class="carousel-services__content__title">${service.title}</h3>
        <p class="carousel-services__content__text">
          ${service.text}
        </p>
        <ul class="carousel-services__content__list">
          ${listHtml}
        </ul>
      </div>`;
  }
  const servicesContainer = document.querySelector(".carousel-services__list");
  servicesContainer.innerHTML = servicesHtml;
}
renderServices(services);
function renderSlide() {
  const slideContainer = document.querySelector(".carousel-services__list");
  let slideHtml = "";
  slideHtml += `
    <div class="carousel-services__content">
      <img src="${services[currentIdx].image}" alt="${
    services[currentIdx].title
  }" />
      <h3 class="carousel-services__content__title">${
        services[currentIdx].title
      }</h3>
      <p class="carousel-services__content__text">${
        services[currentIdx].text
      }</p>
      <ul class="carousel-services__content__list">
        ${services[currentIdx].list
          .map(
            (item) => `
          <li class="carousel-services__content__list-item">
            <span class="check-icon"></span>
            <p class="carousel-services__content__list-item-text">${item}</p>
          </li>`
          )
          .join("")}
      </ul>
    </div>`;

  if (window.matchMedia("(min-width:768px)").matches) {
    const secondSlideIdx =
      currentIdx + 1 >= services.length ? 0 : currentIdx + 1;
    slideHtml += `
      <div class="carousel-services__content">
        <img src="${services[secondSlideIdx].image}" alt="${
      services[secondSlideIdx].title
    }" />
        <h3 class="carousel-services__content__title">${
          services[secondSlideIdx].title
        }</h3>
        <p class="carousel-services__content__text">${
          services[secondSlideIdx].text
        }</p>
        <ul class="carousel-services__content__list">
          ${services[secondSlideIdx].list
            .map(
              (item) => `
            <li class="carousel-services__content__list-item">
              <span class="check-icon"></span>
              <p class="carousel-services__content__list-item-text">${item}</p>
            </li>`
            )
            .join("")}
        </ul>
      </div>`;
    if (window.matchMedia("(min-width:1090px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= services.length ? 0 : secondSlideIdx + 1;
      slideHtml += `
        <div class="carousel-services__content">
          <img src="${services[thirdSlideIdx].image}" alt="${
        services[thirdSlideIdx].title
      }" />
          <h3 class="carousel-services__content__title">${
            services[thirdSlideIdx].title
          }</h3>
          <p class="carousel-services__content__text">${
            services[thirdSlideIdx].text
          }</p>
          <ul class="carousel-services__content__list">
            ${services[thirdSlideIdx].list
              .map(
                (item) => `
              <li class="carousel-services__content__list-item">
                <span class="check-icon"></span>
                <p class="carousel-services__content__list-item-text">${item}</p>
              </li>`
              )
              .join("")}
          </ul>
        </div>`;
    }
  }

  slideContainer.innerHTML = slideHtml;
  renderIndicators();
}
function renderIndicators() {
  let indicatorsHtml = "";
  for (let i = 0; i < services.length; i++) {
    if (i === currentIdx) {
      indicatorsHtml += '<button class="indicator active">●</button>';
    } else {
      indicatorsHtml += '<button class="indicator">●</button>';
    }
  }
  const indicatorsContainer = document.querySelector(
    ".carousel-services__indicators"
  );
  indicatorsContainer.innerHTML = indicatorsHtml;
  addIndicatorsEventListeners();
}
function addIndicatorsEventListeners() {
  const indicators = document.querySelectorAll(
    ".carousel-services__indicators .indicator"
  );
  indicators.forEach((indicator, idx) => {
    indicator.addEventListener("click", () => {
      currentIdx = idx;
      renderSlide();
    });
  });
}
function nextSlide() {
  currentIdx = currentIdx + 1 >= services.length ? 0 : currentIdx + 1;
  renderSlide();
}
function prevSlide() {
  currentIdx = currentIdx - 1 < 0 ? services.length - 1 : currentIdx - 1;
  renderSlide();
}
const btnNext = document.querySelector(".carousel-services__btn-next");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".carousel-services__btn-prev");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);

renderSlide();
