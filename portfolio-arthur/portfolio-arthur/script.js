// 1) Menu do celular: abre e fecha ao clicar no botão
var botao = document.querySelector('.burger');
var menu = document.querySelector('nav ul');
var links = document.querySelectorAll('nav a');

botao.onclick = function () {
  menu.classList.toggle('open');
  botao.setAttribute('aria-expanded', menu.classList.contains('open'));
};

// Fecha o menu quando clica em um link
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    menu.classList.remove('open');
  };
}

// 2) Ao rolar a página: mostra os blocos e destaca o link do menu
function aoRolar() {
  var itens = document.querySelectorAll('.rv');
  for (var i = 0; i < itens.length; i++) {
    var distanciaDoTopo = itens[i].getBoundingClientRect().top;
    if (distanciaDoTopo < window.innerHeight - 60) {
      itens[i].classList.add('in');
      var barra = itens[i].querySelector('.bar i');
      if (barra) {
        barra.style.width = barra.getAttribute('data-w');
      }
    }
  }

  var secoes = document.querySelectorAll('main section');
  var atual = 'inicio';
  for (var j = 0; j < secoes.length; j++) {
    if (window.scrollY + 150 >= secoes[j].offsetTop) {
      atual = secoes[j].id;
    }
  }
  for (var k = 0; k < links.length; k++) {
    if (links[k].getAttribute('href') === '#' + atual) {
      links[k].classList.add('on');
    } else {
      links[k].classList.remove('on');
    }
  }
}
window.onscroll = aoRolar;
aoRolar();

// 3) Efeito de digitação no título
var elemento = document.getElementById('typed');
var frase = elemento.textContent;
var posicao = 0;

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  elemento.textContent = '';
  var relogio = setInterval(function () {
    posicao = posicao + 1;
    elemento.textContent = frase.slice(0, posicao);
    if (posicao >= frase.length) {
      clearInterval(relogio);
    }
  }, 40);
}
