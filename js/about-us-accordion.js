const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
        const content = this.nextElementSibling;
        const isActive = content.classList.toggle("active");
        this.classList.toggle("active");

        if (isActive) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;

        }

        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== this) {
                otherHeader.nextElementSibling.classList.remove("active");
                otherHeader.classList.remove("active");
                otherHeader.nextElementSibling.style.maxHeight = null;
                otherHeader.nextElementSibling.style.padding = '0';
            }
        });
    });
});
