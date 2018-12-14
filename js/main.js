$(document).ready(function() {
  setTimeout(function(){
    window.scrollTo(0, 1); // This hides the address bar:
}, 0);

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