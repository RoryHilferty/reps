$(document).ready(function() {
  var menuWrapper = document.querySelector('.menuWrapper');
  
  menuWrapper.addEventListener('click', function() {
    var menuLine = document.querySelector('.menuLine');
    
    menuLine.classList.toggle('toggled');
  });

  var arrow = document.querySelector('.arrow');

  arrow.addEventListener('click', function() {
    $('.arrow').animatescroll({scrollSpeed: 750, easing: 'easeInOutQuad'});
  });
});