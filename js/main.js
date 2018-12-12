var menuWrapper = document.querySelector('.menuWrapper');

menuWrapper.addEventListener('click', function() {
  var menuLine = document.querySelector('.menuLine');

  menuLine.classList.toggle('toggled');
});