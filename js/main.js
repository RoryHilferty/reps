$(document).ready(function() {
  // Define Wathan's formula for calculating 1RM
  function wathan(weight, reps) {
    // Get user inputed values
    weight = parseFloat(document.querySelector('.weight').value);
    reps = parseFloat(document.querySelector('.reps').value);

    // Detects invalid values
    if (reps == 0 || document.querySelector('.weight').value == '' || document.querySelector('.reps').value == '') {
      return 0;
    } else if (reps == 1) {
      return weight;
    } else {
      var result = (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
      // Correct result to 1 decimal place
      return result.toFixed(1);
    }
  }

  // Required for Rellax plug-in
  var rallax = new Rellax('.rellax');

  // Get wrapper for burger menu
  var menuWrapper = document.querySelector('.menuWrapper');
  
  // Toggle classes when burger menu is clicked
  menuWrapper.addEventListener('click', function() {
    document.querySelector('.menuLine').classList.toggle('toggled');
    document.querySelector('.navOpened').classList.toggle('toggled');
    document.querySelector('.navLeft').classList.toggle('toggled');
  });

  document.querySelector('.arrow').addEventListener('click', function() {
    $('#app').animatescroll({scrollSpeed: 1500, easing: 'easeInOutQuint'});
  });

  var inputList =  document.querySelectorAll('input');

  for (input of inputList) {
    input.addEventListener('focus', function(ev) {
      ev.target.parentElement.classList.add('effect');

      setTimeout(function() {
        $('.weight').animatescroll({scrollSpeed: 1500, easing: 'easeInOutQuint', padding: 110});
      }, 200)
    });

    input.addEventListener('blur', function(ev) {
      if (ev.target.value == '') {
        ev.target.parentElement.classList.remove('effect');
      }
    });
  }

  document.querySelector('.btn').addEventListener('click', function() {
    setTimeout(function() {
      $('.weight').animatescroll({scrollSpeed: 1500, easing: 'easeInOutQuint', padding: 110});
    }, 200)

    result = document.getElementById('result');
    result.classList.add('result');
    result.innerHTML = wathan();
  });
});