document.addEventListener('DOMContentLoaded', function() {

// --- CARROSSEL (SEÇÃO NOSSOS SERVIÇOS) ---
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = track.clientWidth;
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

updateCarousel();

// --- CARROSSEL DE FEEDBACKS ---
document.addEventListener("DOMContentLoaded", function () {
  const feedbackCarousel = document.querySelector(".feedbacks-carousel");
  if (!feedbackCarousel) return;

  const items = feedbackCarousel.querySelectorAll(".feedback-item");
  const total = items.length;
  let index = 0;

  const prevBtn = document.querySelector(".feedback-prev");
  const nextBtn = document.querySelector(".feedback-next");

  function showFeedback(i) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      item.style.opacity = "0";
      item.style.transform = "translateX(50px)";
      if (idx === i) {
        item.classList.add("active");
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    showFeedback(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    showFeedback(index);
  });

  setInterval(() => {
    index = (index + 1) % total;
    showFeedback(index);
  }, 6000);

  showFeedback(index);
});

// --- FORMULÁRIO ---
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  this.reset();
});

});
