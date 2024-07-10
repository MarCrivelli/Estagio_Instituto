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

// fim do código do navbar lateral














document.getElementById('showFormButton').addEventListener('click', function() {
  document.getElementById('formModal').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function() {
  document.getElementById('formModal').style.display = 'none';
  resetForm();
});

document.getElementById('imageInput').addEventListener('change', function() {
  const imageInput = document.getElementById('imageInput');
  const imagePreview = document.getElementById('imagePreview');

  if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
          imagePreview.src = e.target.result;
          imagePreview.style.display = 'block';
      }
      reader.readAsDataURL(imageInput.files[0]);
  } else {
      imagePreview.style.display = 'none';
  }
});

document.getElementById('confirmButton').addEventListener('click', function() {
  const imageInput = document.getElementById('imageInput');
  const nameInput = document.getElementById('nameInput').value;
  const ageInput = document.getElementById('ageInput').value;
  const breedInput = document.getElementById('breedInput').value;
  const descriptionInput = document.getElementById('descriptionInput').value;
  const animalTypeInput = document.getElementById('animalTypeInput').value;
  const imagePreview = document.getElementById('imagePreview').src;

  if (!nameInput || !ageInput || !breedInput || !descriptionInput || !animalTypeInput) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  const card = document.createElement('div');
  card.className = 'cardAnimais';
  card.id = `card-${Date.now()}`; // Assign a unique ID to each card

  const img = document.createElement('img');
  img.src = imagePreview;
  card.appendChild(img);

  const name = document.createElement('h3');
  name.textContent = nameInput;
  card.appendChild(name);

  const age = document.createElement('p');
  age.textContent = `Idade: ${ageInput}`;
  card.appendChild(age);

  const breed = document.createElement('h4');
  breed.textContent = `Raça: ${breedInput}`;
  card.appendChild(breed);

  const type = document.createElement('p');
  type.textContent = `Tipo: ${animalTypeInput.charAt(0).toUpperCase() + animalTypeInput.slice(1)}`;
  card.appendChild(type);

  const description = document.createElement('div');
  description.textContent = descriptionInput;
  card.appendChild(description);

  const actions = document.createElement('div');
  actions.className = 'card-actions';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.addEventListener('click', function() {
      card.remove();
  });
  actions.appendChild(deleteButton);

  const editButton = document.createElement('button');
  editButton.textContent = 'Editar';
  editButton.addEventListener('click', function() {
      document.getElementById('nameInput').value = nameInput;
      document.getElementById('ageInput').value = ageInput;
      document.getElementById('breedInput').value = breedInput;
      document.getElementById('descriptionInput').value = descriptionInput;
      document.getElementById('animalTypeInput').value = animalTypeInput;

      if (img.src) {
          document.getElementById('imagePreview').src = img.src;
          document.getElementById('imagePreview').style.display = 'block';
      }

      document.getElementById('formModal').style.display = 'flex';

      card.remove();
  });
  actions.appendChild(editButton);

  card.appendChild(actions);

  document.getElementById('fichaDosAnimais').appendChild(card);

  resetForm();
  document.getElementById('formModal').style.display = 'none';
});

function resetForm() {
  document.getElementById('imageInput').value = '';
  document.getElementById('nameInput').value = '';
  document.getElementById('ageInput').value = '';
  document.getElementById('breedInput').value = '';
  document.getElementById('descriptionInput').value = '';
  document.getElementById('animalTypeInput').value = 'gato';
  document.getElementById('imagePreview').src = '';
  document.getElementById('imagePreview').style.display = 'none';
}

// Fechar o modal clicando fora do conteúdo
window.onclick = function(event) {
  const modal = document.getElementById('formModal');
  if (event.target === modal) {
      modal.style.display = 'none';
      resetForm();
  }
}

// Barra de pesquisa
document.getElementById('searchBar').addEventListener('keyup', function() {
  const filter = this.value.toLowerCase();
  const cards = document.getElementsByClassName('cardAnimais');

  for (let i = 0; i < cards.length; i++) {
      const name = cards[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
      if (name.indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
});




