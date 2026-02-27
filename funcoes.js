  document.addEventListener('DOMContentLoaded', function() {
    function ativarNumeros() {
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;  

        if(count < target) {
          counter.innerText = Math.ceil(count + increment);
          var delay = 50;
          if (target >= 20){
            delay = 10;
          }
          setTimeout(updateCount, delay);
        } else {
          counter.innerText = target + "%";
        }
      };
      updateCount();
    });
  }

  const secaoAlvo = document.querySelector("#realidade-numeros");

  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          ativarNumeros();
          observer.unobserve(secaoAlvo);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observador.observe(secaoAlvo);
});
