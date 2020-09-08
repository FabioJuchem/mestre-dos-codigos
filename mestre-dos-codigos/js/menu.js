window.onscroll = function() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  const menu = document.querySelector('.code-master__menu');
  if( top > 30){
    menu.classList.add('active');
  } else {
    menu.classList.remove('active');
  }
}

'use-strict'
console.log(this)