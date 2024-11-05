const elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    // Fecha outras dúvidas abertas
    elementosDuvida.forEach(function (item) {
      if (item !== duvida) {
        item.classList.remove('ativa');
      }
    });
    
    // Alterna a dúvida clicada
    duvida.classList.toggle('ativa');
  });
});
