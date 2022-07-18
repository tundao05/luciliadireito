const desiredElement = document.getElementById('navigation') // elemento alvo
const pixelsAmount = '50' // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function () {
  if (window.scrollY > pixelsAmount) {
    desiredElement.classList.add('changeStyle') // adiciona classe "changeColor"
  } else {
    desiredElement.classList.remove('changeStyle') // remove classe "changeColor"
  }
})

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show')
    } else {
      $('.scroll-up-btn').removeClass('show')
    }
  })
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 })
  })
})

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats,
 #services, 
 #services header, 
 #services .card, 
 #about, 
 #about header, 
 #about .content`)
