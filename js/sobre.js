/* ===================================================== */
/*  SISTEMA DE PAINÉIS - SCROLL PC + CELULAR (FINAL)     */
/* ===================================================== */

const panels = document.querySelectorAll(".panel");
let currentPanel = 0;
let isAnimating = false;

function activatePanel(index) {
    if (isAnimating || index === currentPanel) return;
    isAnimating = true;

    const oldPanel = panels[currentPanel];
    const newPanel = panels[index];

    oldPanel.classList.add("exit");
    newPanel.classList.add("enter");

    setTimeout(() => {
        oldPanel.classList.remove("active", "exit");
        newPanel.classList.remove("enter");
        newPanel.classList.add("active");

        currentPanel = index;
        isAnimating = false;
    }, 900);
}

/* ===== SCROLL DO MOUSE (PC) ===== */
document.getElementById("scroll-container").addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && currentPanel < panels.length - 1) {
        activatePanel(currentPanel + 1);
    }
    else if (e.deltaY < 0 && currentPanel > 0) {
        activatePanel(currentPanel - 1);
    }
}, { passive: true });

/* ===== SCROLL POR TOQUE (CELULAR) ===== */

let startY = 0;

document.getElementById("scroll-container").addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
}, { passive: true });

document.getElementById("scroll-container").addEventListener("touchmove", (e) => {
    if (isAnimating) return;

    const currentY = e.touches[0].clientY;
    const delta = startY - currentY;

    if (delta > 40 && currentPanel < panels.length - 1) {
        activatePanel(currentPanel + 1);
        startY = currentY;
    }
    else if (delta < -40 && currentPanel > 0) {
        activatePanel(currentPanel - 1);
        startY = currentY;
    }
}, { passive: true });


/* ======================================== */
/*     MODAL DOS CHEFS - FINAL CORRIGIDO    */
/* ======================================== */

function openChefModal(foto, nome, idade, especialidade, historia) {

    document.getElementById("chefModalImg").src = foto;
    document.getElementById("chefModalNome").textContent = nome;
    document.getElementById("chefModalIdade").textContent = "Idade: " + idade;
    document.getElementById("chefModalEspecialidade").textContent = "Especialidade: " + especialidade;
    document.getElementById("chefModalHistoria").textContent = historia;

    document.getElementById("chefModal").classList.add("active");
}

function closeChefModal() {
    document.getElementById("chefModal").classList.remove("active");
}

document.getElementById("chefModal").addEventListener("click", (e) => {
    if (e.target.id === "chefModal") closeChefModal();
});
