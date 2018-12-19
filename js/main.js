$(document).ready(function() {
  var rallax = new Rellax('.rellax');
  var menuWrapper = document.querySelector('.menuWrapper');
  
  menuWrapper.addEventListener('click', function() {
    document.querySelector('.menuLine').classList.toggle('toggled');
    document.querySelector('.navOpened').classList.toggle('toggled');
    document.querySelector('.navLeft').classList.toggle('toggled');

    var inputLineList =  document.querySelectorAll('.inputLine');

    for (inputLine of inputLineList) {
      inputLine.classList.toggle('toggled');
    }
  });

  var arrow = document.querySelector('.arrow');

  arrow.addEventListener('click', function() {
    $('#app').animatescroll({scrollSpeed: 1500, easing: 'easeInOutQuint'});
  });

  var inputList =  document.querySelectorAll('input');

  for (input of inputList) {
    input.addEventListener('focus', function(ev) {
      ev.target.parentElement.classList.add('effect');
    });

    input.addEventListener('blur', function(ev) {
      if (ev.target.value == '') {
        ev.target.parentElement.classList.remove('effect');
      }
    });
  }
});