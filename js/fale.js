document.addEventListener("DOMContentLoaded", () => {

  const formContato = document.getElementById("formContato");
  const contatoModal = document.getElementById("contatoModal");
  const closeContato = document.getElementById("closeContato");
  const navbar = document.getElementById("navbar");

  // NAVBAR SCROLL
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
  }

  // FORM CONTATO
  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();

      if (contatoModal) {
        contatoModal.classList.add("active");
      }

      formContato.reset();
    });
  }

  // FECHAR MODAL
  if (closeContato) {
    closeContato.addEventListener("click", () => {
      contatoModal.classList.remove("active");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === contatoModal) {
      contatoModal.classList.remove("active");
    }
  });

});
