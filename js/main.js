$(document).ready(function() {
  // Define Wathan's formula for calculating 1RM
  function wathan(weight, reps) {
    weight = parseFloat(document.querySelector('.weight').value);
    reps = parseFloat(document.querySelector('.reps').value);

    // Detect if input values are invalid
    if (reps == 0 || document.querySelector('.weight').value == '' || document.querySelector('.reps').value == '') {
      return 0;
    } else if (reps == 1) {
      return weight;
    } else {
      var result = (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
      return result;
    }
  }

  // Required for Rellax plug-in
  // var rallax = new Rellax('.rellax');

  // Get wrapper for burger menu
  var menuWrapper = document.querySelector('.menuWrapper');
  
  menuWrapper.addEventListener('click', function() {
    document.querySelector('.menuLine').classList.toggle('toggled');
    document.querySelector('.navOpened').classList.toggle('toggled');
    document.querySelector('.navLeft').classList.toggle('toggled');
  });

  // Smooth scroll to app when arrow is clicked
  // document.querySelector('.arrow').addEventListener('click', function() {
  //   $('#app').animatescroll({scrollSpeed: 1500, easing: 'easeInOutQuint'});
  // });

  var inputArray =  document.querySelectorAll('input');

  for (item of inputArray) {
    item.addEventListener('focus', function(ev) {
      ev.target.parentElement.classList.add('effect');

      // if (screen.width <= 800) {
      //   setTimeout(function() {
      //     $('.weight').animatescroll({scrollSpeed: 1500, easing: 'easeInOutQuint', padding: 110});
      //   }, 200)
      // }
    });

    item.addEventListener('blur', function(ev) {
      // Detect if input values are invalid
      if (ev.target.value == '') {
        ev.target.parentElement.classList.remove('effect');
      }
    });
  }

  document.querySelector('.btn').addEventListener('click', function() {
    if (screen.width <= 800) {
      setTimeout(function() {
        $('#result').animatescroll({scrollSpeed: 1500, easing: 'easeInOutQuint', padding: 100});
      }, 200)
    }

    result = document.getElementById('result');
    result.classList.add('result');

    // Correct result to 0 decimal places
    result.innerHTML = wathan().toFixed(0);

    // Create object with all multipliers for the repmaxs
    var multipliers = {
      1: 1,
      2: 0.95106,
      3: 0.91760,
      4: 0.88656,
      5: 0.85776,
      6: 0.83104,
      7: 0.80626,
      8: 0.78326,
      9: 0.76193,
      10: 0.74213
    }

    if (document.querySelector('.tableWrapper').classList.contains('hidden')) {
      document.querySelector('.tableWrapper').classList.remove('hidden');
    }
    
    document.querySelector('table').innerHTML = `
    <tr>
      <th>reps</th>
      <th>weight</th>
    </tr>
    `;

    for (i = 1; i < 11; i++) {
      document.querySelector('table').innerHTML += `
        <tr>
          <td>${i}</td>
          <td>${(wathan() * multipliers[i]).toFixed(1)}</td>
        </tr>
      `;
    }
  });
});