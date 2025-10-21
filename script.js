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

// Carrossel de Feedbacks
const feedbackTrack = document.querySelector('.feedback-carousel .carousel-track');
const feedbackItems = document.querySelectorAll('.feedback-carousel .carousel-item');
const feedbackPrev = document.querySelector('.feedback-carousel .prev');
const feedbackNext = document.querySelector('.feedback-carousel .next');

let feedbackIndex = 0;

function showFeedbackSlide(index) {
  const slideWidth = feedbackItems[0].offsetWidth;
  feedbackTrack.style.transform = `translateX(-${index * slideWidth}px)`;
}

feedbackNext.addEventListener('click', () => {
  feedbackIndex = (feedbackIndex + 1) % feedbackItems.length;
  showFeedbackSlide(feedbackIndex);
});

feedbackPrev.addEventListener('click', () => {
  feedbackIndex = (feedbackIndex - 1 + feedbackItems.length) % feedbackItems.length;
  showFeedbackSlide(feedbackIndex);
});
