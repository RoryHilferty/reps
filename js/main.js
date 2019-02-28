window.onload = function() {
  // Define Wathan's formula for calculating 1RM
  function wathan(weight, reps) {
    weight = parseFloat(document.querySelector('.weight').value);
    reps = parseFloat(document.querySelector('.reps').value);

    // Detect if input values are invalid
    if (reps == 0 || isNaN(reps) || isNaN(weight)) {
      return 0;
    } else if (reps == 1) {
      return weight;
    } else {
      var result = (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
      return result;
    }
  }

  const menuBtn = document.querySelector('.menuBtn');

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
  });

  const inputList = document.querySelectorAll('input');

  for (item of inputList) {
    item.addEventListener('focus', function(event) {
      event.target.parentElement.classList.add('effect');
    });

    item.addEventListener('blur', function(event) {
      if (event.target.value == '') {
        event.target.parentElement.classList.remove('effect');
      }
    });
  }

  const calculate = document.querySelector('.calculate');
  
  calculate.addEventListener('click', function() {
    const resultArea = document.querySelector('.resultArea');
    const repMaxes = document.querySelector('.repMaxes');

    if (resultArea.classList.contains('notVisible')) {
      resultArea.classList.remove('notVisible');
    }

    // Detect if returned value is ridiculously large
    if (wathan() > 10000) {
      resultArea.innerHTML = 'O O F';

      if (repMaxes.classList.contains('notVisible') == false) {
        repMaxes.classList.add('notVisible');
      }
    } else {
      resultArea.innerHTML = wathan().toFixed(0);
    }
    
    const multipliers = {
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

    if (wathan() <= 10000) {
      if (repMaxes.classList.contains('notVisible')) {
        repMaxes.classList.remove('notVisible');
      }

      repMaxes.innerHTML = `
        <tr>
          <th>Reps</th>
          <th>Weight</th>
        </tr>
      `;

      for (i = 1; i <= Object.keys(multipliers).length; i++) {
        repMaxes.innerHTML += `
          <tr>
            <td>${i}</td>
            <td>${(wathan() * multipliers[i]).toFixed(1)}</td>
          </tr>
        `;
      }
    }
  });
}