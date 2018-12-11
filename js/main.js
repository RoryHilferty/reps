var menuWrapper = document.querySelector('.menuWrapper');

menuWrapper.addEventListener('click', function () {
  var menuLine = document.querySelector('.menuLine');

  if (menuLine.classList.contains('clicked')) {
    menuLine.classList.remove('clicked');
  } else {
    menuLine.classList.add('clicked');
  }
});