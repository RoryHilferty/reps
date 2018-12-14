$(document).ready(function() {
  var menuWrapper = document.querySelector('.menuWrapper');
  
  menuWrapper.addEventListener('click', function() {
    document.querySelector('.menuLine').classList.toggle('toggled');
    document.querySelector('.navOpened').classList.toggle('toggled');
    document.querySelector('.navLeft').classList.toggle('toggled');
  });

  var arrow = document.querySelector('.arrow');

  arrow.addEventListener('click', function() {
    $('#app').animatescroll({scrollSpeed: 750, easing: 'easeInOutQuad'});
  });
});