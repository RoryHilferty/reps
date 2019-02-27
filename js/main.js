window.onload = function() {
  // Define Wathans formula for calculating 1RM
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
}