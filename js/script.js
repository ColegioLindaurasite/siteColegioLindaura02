const big_lists = document.querySelectorAll('.big-list');
const see_more_buttons = document.querySelectorAll('.see-more-button');

big_lists.forEach((big_list, index) => {
  const see_more_button = see_more_buttons[index];
  if (see_more_button) {
    see_more_button.addEventListener('click', () => {
      big_list.classList.toggle('opened');
    });
  }
});


const imagem1 = document.getElementById('imagem1');
const modal = document.getElementById('modalImagem');
const imgExpandida = document.getElementById('imgExpandida');
const fechar = document.getElementsByClassName('fechar')[0];

imagem1.onclick = function() {
  modal.style.display = "block";
  imgExpandida.src = this.src;
}

fechar.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const imagens = document.querySelectorAll('.carrossel-imagem');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');
let indiceAtual = 0;

function mostrarImagem(indice) {
  imagens.forEach((img, i) => {
    img.style.display = i === indice ? 'block' : 'none';
  });
}

btnAnterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(indiceAtual);
});

btnProximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem(indiceAtual);
});

// Inicializa o carrossel
mostrarImagem(indiceAtual);

function mostrarImagem(indice) {
  imagens.forEach((img, i) => {
    img.classList.toggle('active', i === indice);
  });
}