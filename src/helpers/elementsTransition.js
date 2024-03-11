export function effect(str) {
    window.addEventListener('scroll', () => {
        const elementos = document.querySelectorAll('.elemento');
        
        elementos.forEach(elemento => {
          if (isElementInViewport(elemento)) {
            elemento.classList.add('mostrar');
          }
        });
      });
    
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
}