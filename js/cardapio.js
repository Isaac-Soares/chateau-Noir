// ================================
// ✅ ANIMAÇÃO AO SCROLL
// ================================
const sections = document.querySelectorAll(".menu-section");
const cards = document.querySelectorAll(".menu-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));
cards.forEach(card => observer.observe(card));


// ================================
// ✅ CARRINHO
// ================================
let cart = [];
let totalValue = 0;

// Adicionar item ao carrinho
function addToCart(nome, preco) {
  cart.push({ nome, preco });
  atualizarCarrinho();
}

// Atualizar carrinho (navbar + modal)
function atualizarCarrinho() {
  const cartItems = document.getElementById("cartItems");
  const checkoutListaCarrinho = document.getElementById("checkoutListaCarrinho");
  const cartTotal = document.getElementById("cartTotal");
  const cartTotalTexto = document.getElementById("cartTotalTexto");
  const checkoutTotalCarrinho = document.getElementById("checkoutTotalCarrinho");

  cartItems.innerHTML = "";
  checkoutListaCarrinho.innerHTML = "";

  cart.forEach((item, index) => {
    // Navbar
    const liNav = document.createElement("li");
    liNav.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerItem(${index})">❌</button>`;
    cartItems.appendChild(liNav);

    // Modal
    const liModal = document.createElement("li");
    liModal.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerItem(${index})">🗑</button>`;
    checkoutListaCarrinho.appendChild(liModal);
  });

  totalValue = cart.reduce((soma, item) => soma + item.preco, 0);

  cartTotal.innerText = totalValue.toFixed(2);
  cartTotalTexto.innerText = totalValue.toFixed(2);
  if(checkoutTotalCarrinho) checkoutTotalCarrinho.innerText = totalValue.toFixed(2);
}

// Remover item do carrinho
function removerItem(index) {
  cart.splice(index, 1);
  atualizarCarrinho();
}

// Abrir/fechar modal do carrinho
function toggleCarrinho() {
  document.getElementById("carrinhoModal").classList.toggle("active");
}

// Confirmar pedido
function confirmarPedido() {
  if(cart.length === 0){
    alert("Seu carrinho está vazio!");
    return;
  }
  alert(`✅ Pedido confirmado!\nTotal: R$ ${totalValue.toFixed(2)}`);
  cart = [];
  totalValue = 0;
  atualizarCarrinho();
  toggleCarrinho();
}


// ================================
// ✅ SUCOS E REFRIGERANTES
// ================================
function trocarSuco(valor) {
  const sucoNome = document.getElementById("sucoNome");
  const img = document.getElementById("sucoImg");

  sucoNome.innerText = "Suco de " + valor;

  switch(valor) {
    case "Uva": img.src = "/img/bebidas/suco-uva.jpg"; break;
    case "Laranja": img.src = "/img/bebidas/suco-laranja.jpg"; break;
    case "Abacaxi": img.src = "/img/bebidas/suco-abacaxi.jpg"; break;
    case "Morango": img.src = "/img/bebidas/suco-morango.jpg"; break;
  }
}

function trocarRefri(valor) {
  const refriNome = document.getElementById("refriNome");
  const img = document.getElementById("refriImg");

  refriNome.innerText = valor;

  switch(valor) {
    case "Coca-Cola": img.src = "/img/bebidas/coca.jpg"; break;
    case "Guaraná": img.src = "/img/bebidas/guarana.png"; break;
    case "Sprite": img.src = "/img/bebidas/sprite.jpg"; break;
    case "Fanta": img.src = "/img/bebidas/fanta.jpg"; break;
  }
}

// Inicializa bebidas ao carregar página
document.addEventListener("DOMContentLoaded", () => {
  trocarSuco("Uva");
  trocarRefri("Coca-Cola");
});


// ================================
// ✅ PESQUISA POR CATEGORIA COM FADE
// ================================
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const filtro = searchInput.value.toLowerCase().trim();

  sections.forEach(section => {
    const categoria = section.dataset.category.toLowerCase();
    const pratos = section.querySelectorAll(".menu-card");

    if (filtro === "") {
      section.style.display = "block";
      pratos.forEach(prato => {
        prato.classList.remove("hide");
        prato.classList.add("show");
      });
      return;
    }

    if (categoria.includes(filtro)) {
      section.style.display = "block";
      pratos.forEach(prato => {
        prato.classList.remove("hide");
        prato.classList.add("show");
      });
    } else {
      pratos.forEach(prato => {
        prato.classList.remove("show");
        prato.classList.add("hide");
      });
      setTimeout(() => {
        section.style.display = "none";
      }, 300);
    }
  });
});


// ================================
// ✅ MODAL DO PRATO
// ================================
let pratoAtual = null;

function openPrato(nome, preco, img, desc) {
  pratoAtual = { nome, preco };
  document.getElementById("modalImg").src = img;
  document.getElementById("modalNome").innerText = nome;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalPreco").innerText = "R$ " + preco.toFixed(2);
  document.getElementById("pratoModal").classList.add("active");
}

function fecharModal() {
  document.getElementById("pratoModal").classList.remove("active");
}

function addToCartModal() {
  addToCart(pratoAtual.nome, pratoAtual.preco);
  fecharModal();
}
