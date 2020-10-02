
function slideLeft() {
  document.querySelector('.carousel-items').scrollBy( { top: 0, left: -500, behavior: 'smooth'})
}

function slideRight() {
  document.querySelector('.carousel-items').scrollBy( { top: 0, left: 500, behavior: 'smooth'})
}