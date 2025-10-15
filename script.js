// --- FORMULÁRIO ---
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  this.reset();
});

// --- CARROSSEL ---
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");

let currentIndex = 0;

// Ajusta a posição inicial
function updateCarousel() {
  const itemWidth = track.clientWidth; // pega a largura visível do container
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

// Inicializa o carrossel
updateCarousel();
