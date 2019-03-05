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
      return (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
    }
  }

  const menuBtn = document.querySelector('.menuBtn');

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    document.querySelector('.nav').classList.toggle('open');

    if (menuBtn.classList.contains('open')) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
  });

  window.addEventListener('scroll', function() {
    const top = document.querySelector('.top');

    // Detect if page has been scrolled 10px or more from top of viewport
    if (window.pageYOffset >= 10) {
      if (top.classList.contains('scrolled') == false) {
        top.classList.add('scrolled');
      }
    }

    if (window.pageYOffset < 10) {
      if (top.classList.contains('scrolled')) {
        top.classList.remove('scrolled');
      }
    }
  });

  const inputList = document.querySelectorAll('input');

  for (item of inputList) {
    item.addEventListener('focus', function(e) {
      // Add class to parent element if input field is selected
      e.target.parentElement.classList.add('effect');
    });

    item.addEventListener('blur', function(e) {
      // If when the input field is deselected the field is empty, remove class from parent element
      if (e.target.value == '') {
        e.target.parentElement.classList.remove('effect');
      }
    });

    // Add event listener for when the user releases a key
    item.addEventListener('keyup', function(e) {
      // If it's the enter key (key code 13), then click the calculate button
      if (event.keyCode === 13) {
        // Prevent the default action of the enter key if necessary
        event.preventDefault();
        document.querySelector('.calculate').click();
      }
    });
  }
  
  document.querySelector('.calculate').addEventListener('click', function() {
    const resultArea = document.querySelector('.resultArea');
    const repMaxes = document.querySelector('.repMaxes');

    if (resultArea.classList.contains('notVisible')) {
      resultArea.classList.remove('notVisible');
    }

    // Detect if returned value is ridiculously large or 0
    if (wathan() > 1000 || wathan() == 0) {
      if (resultArea.classList.contains('memeFont') == false) {
        resultArea.classList.add('memeFont');
      }

      // Create an array of emojis
      const faces = [
        '(·.·)',
        '(;-;)',
        '(·_·)',
        '(·‿·)',
        '(^.^)',
        '(·o·)',
        'ᕦ(ò_ó)ᕤ',
        '\\(·◡·)/',
        '(つ·◡·)つ',
        '(·╭╮·)',
      ]
      
      // Make the result a random emoji
      resultArea.innerHTML = faces[Math.floor(Math.random() * faces.length)];

      if (repMaxes.classList.contains('notVisible') == false) {
        repMaxes.classList.add('notVisible');
      }
    } else {
      if (resultArea.classList.contains('memeFont')) {
        resultArea.classList.remove('memeFont');
      }

      resultArea.innerHTML = wathan().toFixed(0);
    }
    
    // Create an object of multiplies for reps 1 - 10
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

    if (wathan() <= 1000 && wathan() != 0) {
      if (repMaxes.classList.contains('notVisible')) {
        repMaxes.classList.remove('notVisible');
      }

      // Set up the table headers
      repMaxes.innerHTML = `
        <tr>
          <th>Reps</th>
          <th>Weight</th>
        </tr>
      `;

      // Add a row to the table for each rep multiplier
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