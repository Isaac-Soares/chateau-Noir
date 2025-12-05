/* NAVBAR MUDA NO SCROLL */
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* CARROSSEL AUTOMÁTICO */
const myCarousel = document.querySelector('#carouselExample');
const carousel = new bootstrap.Carousel(myCarousel, {
    interval:  7500,
    ride: "carousel"
});

/* BOTÃO VOLTAR AO TOPO */
document.getElementById("topo").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
    const myCarousel = document.querySelector('#carouselExample');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3500,
        ride: "carousel",
        pause: false,
        wrap: true
    });

    carousel.cycle(); // força iniciar imediatamente
});