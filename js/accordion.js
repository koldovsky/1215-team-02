const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
        const content = this.nextElementSibling;
        content.classList.toggle("active");
        this.classList.toggle("active");
        
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== this) {
                otherHeader.nextElementSibling.classList.remove("active");
                otherHeader.classList.remove("active");
            }
        });
    });
});
