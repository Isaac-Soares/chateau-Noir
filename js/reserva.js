document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ELEMENTOS
  // =========================
  const formReserva = document.getElementById("formReserva");
  const reservaModal = document.getElementById("reservaModal");
  const closeReserva = document.getElementById("closeReserva");
  const navbar = document.getElementById("navbar");

  // =========================
  // NAVBAR SCROLL
  // =========================
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

  // =========================
  // FORMULÁRIO DE RESERVA
  // =========================
  if (formReserva) {
    formReserva.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = formReserva.querySelector("input[type='text']").value;
      const telefone = formReserva.querySelector("input[type='tel']").value;
      const data = formReserva.querySelector("input[type='date']").value;
      const hora = formReserva.querySelector("input[type='time']").value;
      const pessoas = formReserva.querySelector("select").value;
      const obs = formReserva.querySelector("textarea").value;

      console.log("Reserva criada:", {
        nome,
        telefone,
        data,
        hora,
        pessoas,
        obs
      });

      if (reservaModal) {
        reservaModal.classList.add("active");
      }

      formReserva.reset();
    });
  }

  // =========================
  // FECHAR MODAL
  // =========================
  if (closeReserva && reservaModal) {
    closeReserva.addEventListener("click", () => {
      reservaModal.classList.remove("active");
    });

    window.addEventListener("click", (e) => {
      if (e.target === reservaModal) {
        reservaModal.classList.remove("active");
      }
    });
  }

});
