//zadanie 9.6
var list = document.getElementById('list'),
    add = document.getElementById('addElem');
add.addEventListener('click', function() {
  var element = document.createElement('li');
  var listElements = list.getElementsByTagName('li');
  console.log(listElements.length);
  element.innerHTML = 'item ' + listElements.length;
  list.appendChild(element);
});
