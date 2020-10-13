window.onscroll = function() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  const menu = document.querySelector('.code-master__menu');
  const menuButton = document.querySelectorAll('.scroll-slide');
  if( top > 5){
    menu.classList.add('active');
    menuButton.forEach(el => el.classList.add('scroll-active'));
  } else {
    menu.classList.remove('active');
    menuButton.forEach(el => el.classList.remove('scroll-active'));
  }
}

'use-strict'
console.log(this)