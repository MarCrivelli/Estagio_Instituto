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

var divAumentada = false;

function expandir() {
  var div = document.getElementById('divExpansiva');
  var descricao = document.getElementById('descricao');
  var botao = document.getElementById('revelar');
  var blur = document.getElementById('aplicarBlur')

  if (divAumentada) {
    div.style.height = '500px'; // Define a altura original
    divAumentada = false;
    descricao.style.display = 'none';
    botao.textContent = 'Mostrar mais'; 
    blur.classList.remove('blur');

} else {
    div.style.height = '700px'; // Aumenta a altura
    descricao.style.display = 'block'; // Exibe o parágrafo
    botao.textContent = 'Mostrar menos';
    divAumentada = true;
    botao.classList.add('blur'); // Adiciona a classe de desfoque
    blur.classList.add('blur');
}
}