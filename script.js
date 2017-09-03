//zadanie 9.6
var list = document.getElementById('list'),
    add = document.getElementById('addElem');
add.addEventListener('click', function() {
  var element = document.createElement('li');
  element.innerHTML = 'item ';
  //list.getElementsByTagName('li').length;
  list.appendChild(element);
});
