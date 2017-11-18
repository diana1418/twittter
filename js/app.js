window.addEventListener('load', function() {
  // obteniendo datos
  var accountant = document.getElementById('accountant');
  var addText = document.getElementById('add');
  var button = document.getElementById('btn');
  var max = 140;
  var text = document.getElementById('writeInput');
  
  // creando un evento que se produzca al hacer click en 'tweet'

  button.addEventListener('click', function(event) {
    event.preventDefault();

    var save = document.createElement('div');
    save.setAttribute('class','save-div')
    var paragraph = document.createElement('p');
    paragraph.setAttribute('class','new-paragraph');
    paragraph.textContent = text.value; // obteniendo el contenido del input
    save.appendChild(paragraph);
    addText.appendChild(save);
  
    text.value = '';
    accountant.textContent = max;
    addText.insertBefore(save, addText.childNodes[0]);
  });

  // Habilitar y deshabilitando el buttom 

  text.addEventListener('keyup', function() {
    var letter = text.value.length;
    accountant.textContent = max - letter;
  });
}) ;
