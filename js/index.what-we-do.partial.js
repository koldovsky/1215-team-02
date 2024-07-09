 
const element = document.querySelector('.slides-container');
const images = ['../img/what-we-do/interviews.webp','../img/what-we-do/offer.webp','../img/what-we-do/why-choose-us.webp','../img/what-we-do/our-team.webp']; // Список URL-адрес зображень
let currentIndex = 0;

function changeBackgroundImage() {
    const currentImage = images[currentIndex];
    element.style.transition = 'opacity 1s ease-in-out'; 
    element.style.opacity = 0; 
    setTimeout(() => {
      element.style.backgroundImage = `url('${currentImage}')`;
      element.style.opacity = 1; 
    }, 1000); 
    currentIndex = (currentIndex + 1) % images.length;
  }
setInterval(changeBackgroundImage, 5000);
