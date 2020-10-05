
function slideLeft() {
  const element = document.querySelector('.carousel-items')
  const childWidth = element.firstElementChild.offsetWidth
  element.scrollBy( { top: 0, left: -childWidth, behavior: 'smooth'})
}

function slideRight() {
  const element = document.querySelector('.carousel-items')
  const childWidth = element.firstElementChild.offsetWidth
  element.scrollBy( { top: 0, left: childWidth, behavior: 'smooth'})
}