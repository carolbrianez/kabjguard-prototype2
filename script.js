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

// Inicializa o carrossel
updateCarousel();

// --- ZOOM INDIVIDUAL NA EQUIPE COM JS (CORRIGIDA) ---

function setupTeamZoom() {
    const teamContainer = document.querySelector('.team-photo-container');
    const hotspots = document.querySelectorAll('.team-member-hotspot');
    const referenceImage = document.querySelector('.team-photo-reference');
    const imageUrl = referenceImage.src; 
    
    const ZOOM_FACTOR = 1.30; 
    
    // Largura de uma única pessoa em porcentagem
    const HOTSPOT_WIDTH_PERCENT = 20;

    const containerWidth = referenceImage.offsetWidth;
    const containerHeight = referenceImage.offsetHeight;

    if (containerWidth === 0 || containerHeight === 0) {
        setTimeout(setupTeamZoom, 100);
        return;
    }
    
    const initialBackgroundSizeX = containerWidth;
    const initialBackgroundSizeY = containerHeight;

    const zoomedBackgroundSizeX = initialBackgroundSizeX * ZOOM_FACTOR;
    const zoomedBackgroundSizeY = initialBackgroundSizeY * ZOOM_FACTOR;
    
    const zoomDeltaX = zoomedBackgroundSizeX - initialBackgroundSizeX;
    const zoomDeltaY = zoomedBackgroundSizeY - initialBackgroundSizeY;


    hotspots.forEach((hotspot, index) => {
        // 1. Posição inicial (0, 20, 40, 60, 80)
        const hotspotLeftPercent = index * HOTSPOT_WIDTH_PERCENT;
        
        // 2. CÁLCULO CRÍTICO DA POSIÇÃO INICIAL X (em pixels)
        const initialBackgroundPositionX = - (hotspotLeftPercent / 100 * containerWidth);
        const initialBackgroundPositionY = 0; 
        
        // Aplica o background inicial
        hotspot.style.backgroundImage = `url(${imageUrl})`;
        hotspot.style.backgroundSize = `${Math.round(initialBackgroundSizeX)}px ${Math.round(initialBackgroundSizeY)}px`;
        hotspot.style.backgroundPosition = `${Math.round(initialBackgroundPositionX)}px ${Math.round(initialBackgroundPositionY)}px`;


        // Efeito de Hover (Entrada do Mouse)
        hotspot.addEventListener('mouseenter', () => {
            
            // Posição final X: Posição inicial menos metade do delta X.
            const finalBackgroundPositionX = initialBackgroundPositionX - (zoomDeltaX / 2);
            
            // Posição final Y: Sobe o foco para o rosto.
            const finalBackgroundPositionY = - (zoomDeltaY * 0.75); 

            hotspot.style.backgroundSize = `${Math.round(zoomedBackgroundSizeX)}px ${Math.round(zoomedBackgroundSizeY)}px`;
            hotspot.style.backgroundPosition = `${Math.round(finalBackgroundPositionX)}px ${Math.round(finalBackgroundPositionY)}px`;
        });

        // Remove o Efeito de Hover
        hotspot.addEventListener('mouseleave', () => {
            // Retorna ao tamanho e posição original
            hotspot.style.backgroundSize = `${Math.round(initialBackgroundSizeX)}px ${Math.round(initialBackgroundSizeY)}px`;
            hotspot.style.backgroundPosition = `${Math.round(initialBackgroundPositionX)}px ${Math.round(initialBackgroundPositionY)}px`;
        });
    });
    
    // Lógica de Re-inicialização no Resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            hotspots.forEach(h => {
                const newHotspot = h.cloneNode(true);
                h.parentNode.replaceChild(newHotspot, h); 
            });
            setupTeamZoom(); 
        }, 250); 
    });
}   

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
