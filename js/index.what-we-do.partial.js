 
const element = document.querySelector('.slides-container');
const images = ['../img/what-we-do/interviews.webp','../img/what-we-do/offer.webp','../img/what-we-do/why-choose-us.webp','../img/what-we-do/our-team.webp']; // Список URL-адрес зображень
let currentIndex = 0;

function changeBackgroundImage() {
    const currentImage = images[currentIndex];
    element.style.transition = 'opacity 1s ease-in-out'; // Додаємо плавність
    element.style.opacity = 0; // Змінюємо прозорість на 0
    setTimeout(() => {
      element.style.backgroundImage = `url('${currentImage}')`;
      element.style.opacity = 1; // Змінюємо прозорість на 1
    }, 1000); // Затримка 0.5 секунди
    currentIndex = (currentIndex + 1) % images.length;
  }
// Викликаємо функцію кожні 2 секунди
setInterval(changeBackgroundImage, 5000);
