//Guarda todos os elementos que têm a classe "itemMenu"
var menuItem = document.querySelectorAll('.itemMenu');

// O forEach faz uma varredura nos arrays
function selecionarHiperlink() {
  // Vai ser removido dinamicamente uma classe de um item, no qual será a classe itemMenu
  menuItem.forEach((item) => item.classList.remove('ativo'));
  // Vai ser adicionado a classe "ativo" no item que o usuário clicar
  this.classList.add('ativo');
}

// Verifica se o usuário clicou em um item do menu. Quando isto acontecer, o background vai mudar
menuItem.forEach((item) => item.addEventListener('click', selecionarHiperlink));

var variavelBotaoExpandir = document.querySelector('#botaoExpandir');
var variavelMenuLateral = document.querySelector('.menuLateral');

variavelBotaoExpandir.addEventListener('click', function () {
  // O toggle serve para que sempre quando o botão de expandir seja clicado, se existir a classe expandir, ela será removida
  variavelMenuLateral.classList.toggle('expandir');
});

console.log('Script menu.js carregado e em execução.');

let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let indicador = document.querySelector('.indicador');

function togglelightMode() {
    trilho.classList.toggle('light');
    body.classList.toggle('light');
  
    // Adiciona a classe para animar a transição apenas quando a classe light está presente
    if (trilho.classList.contains('light') && trilho.classList.contains('automatic-animation')) {
      indicador.classList.add('animate-light');
    } else {
      indicador.classList.remove('animate-light');
    }
  
    // Salva o estado do tema no localStorage
    localStorage.setItem('lightMode', trilho.classList.contains('light'));
  }
  
  // Adiciona um ouvinte de evento para chamar a função togglelightMode ao clicar na div trilho
  trilho.addEventListener('click', togglelightMode);
  
  // Verifica se a página já está inicialmente em modo light e adiciona a classe automatic-animation se necessário
  window.addEventListener('load', () => {
    // Verifica se há um valor salvo no localStorage
    const lightModeEnabled = localStorage.getItem('lightMode') === 'true';
  
    if (lightModeEnabled) {
      trilho.classList.add('light', 'automatic-animation');
      body.classList.add('light');
      indicador.classList.add('animate-light');
    }
  });
