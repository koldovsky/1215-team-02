const response = await fetch("api/testimonials.json");
const apiTestimonials = await response.json();
const element = document.querySelector(".api-testimonials-carousel");
renderApiTestimonials(element, apiTestimonials);

async function renderApiTestimonials(element, testimonials) {
  let name = "";
  try {
    const response = await fetch(
      "https://fakerapi.it/api/v1/persons?_quantity=1"
    );
    const user = await response.json();
    if (user.status === "OK") {
      name = user.data[0].firstname + " " + user.data[0].lastname;
    } else {
      name = "John Doe";
    }
  } catch {
    name = "John Doe";
  }
  const image_url = "https://thispersondoesnotexist.com/";
  const body =
    testimonials[Math.floor(Math.random() * testimonials.length)].body;
  element.innerHTML = `<article class="api-testimonials-carousel__item">
        <div class="api-testimonials-carousel__image">
            <img src="${image_url}">
        </div>
        <div class="api-testimonials-carousel__text">            
            <p class="api-testimonials-carousel__text-body">"${body}"</p>
            <p class="api-testimonials-carousel__text-name">&Tab;&mdash; ${name}</p>
        </div>
     </article>`;
}
