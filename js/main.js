$(document).ready(function() {
  // Define Wathan's formula for calculating 1RM
  function wathan(w, r) {
    // Get user inputed values
    w = parseFloat(document.querySelector('.weight').value);
    r = parseFloat(document.querySelector('.reps').value);

    var result = (100 * w) / (48.8 + 53.8 * Math.exp(-0.075 * r));
    // Correct result to 1 decimal place
    return result.toFixed(1);
  }

  // Required for Rellax plug-in
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

  document.querySelector('.btn').addEventListener('click', function() {
    setTimeout(function() {
      $('.weight').animatescroll({scrollSpeed: 1000, easing: 'easeInOutQuint', padding: 110});
    }, 100)

    result = document.getElementById('result');
    result.classList.add('result');

    if (document.querySelector('.weight').value == '' || document.querySelector('.reps').value == '') {
      result.innerHTML = 0;
    } else {
      result.innerHTML = wathan();
    }


  });
});