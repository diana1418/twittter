window.addEventListener('load', function() {
  //obteniendo datos
  var addText = document.getElementById('add');
  var button = document.getElementById('saveText');
  var text = document.getElementById('writeInput');
   
  //creando un evento que se produzca al hacer click en 'tweet'

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
    
    addText.insertBefore(save , addText.childNodes[0]);
  });
}) ;
