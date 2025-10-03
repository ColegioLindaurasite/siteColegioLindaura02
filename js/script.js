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

document.addEventListener('DOMContentLoaded', function() {

  // --- LÓGICA DO MODAL DA GALERIA ---

  // 1. Seleciona os elementos necessários do HTML
  const modal = document.getElementById('modalImagem');
  const imgExpandida = document.getElementById('imgExpandida');
  const imagensDaGaleria = document.querySelectorAll('.imagem-galeria');
  const botaoFechar = document.querySelector('.fechar');
  const corpoDaPagina = document.getElementById('efeito-blur-pagina');

  // 2. Adiciona um evento de clique para cada imagem da galeria
  imagensDaGaleria.forEach(imagem => {
      imagem.addEventListener('click', function() {
          // Pega o ID da imagem clicada (ex: "foto1")
          const imagemID = this.id;
          
          // Monta o caminho da imagem que será exibida no modal
          const imagemSrc = `/img/gallery/${imagemID}.webp`;
          
          // Define o SRC da imagem dentro do modal
          imgExpandida.src = imagemSrc;
          
          // Mostra o modal (usando flex para centralizar)
          modal.style.display = 'flex';
          
          // Adiciona o efeito de blur no fundo da página
          corpoDaPagina.classList.add('blur');
      });
  });

  // 3. Função para fechar o modal
  function fecharModal() {
      modal.style.display = 'none';
      // Remove o efeito de blur do fundo da página
      corpoDaPagina.classList.remove('blur');
  }

  // 4. Adiciona os eventos para fechar o modal
  // Clicando no "X"
  botaoFechar.addEventListener('click', fecharModal);

  // Clicando fora da imagem (no fundo escuro)
  modal.addEventListener('click', function(event) {
      if (event.target === modal) {
          fecharModal();
      }
  });
  
  // --- FIM DA LÓGICA DO MODAL ---


  // (Você pode adicionar outras funções do seu site aqui, como a do carrossel, etc.)

});

//Função para executar apenas um vídeo por vez. 
const videos = document.querySelectorAll('.my-video');

videos.forEach(video => {
  video.addEventListener('play', () => {
    videos.forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

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