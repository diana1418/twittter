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
    save.setAttribute('class', 'save-div');
    var paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'new-paragraph');
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
    if (letter > 140) {
      button.disabled = true;
      button.style.backgroundColor = '#E0E4E2';
    } else {
      button.disabled = false;
      button.style.backgroundColor = '#6AD2F3';
    }
  });

  // ajustar al texto
  text.addEventListener('keydown', function() {
    var it = this;
    setTimeout(function() {
      it.style.height = '20vh';
      it.style.padding = '0';
      it.style.height = it.scrollHeight + 'px';
    }, 0);
    
  });
});


