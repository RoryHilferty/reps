window.onload = function() {
  var menuBtn = document.querySelector('.menuBtn');

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
  });
}