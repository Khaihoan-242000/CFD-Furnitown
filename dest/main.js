// js
// varianles
let header = document.querySelector('.header')
let pageYOffset = window.pageYOffset
let openMenuDeskTop = document.querySelector('.slider__menu')
let menuDeskTop = document.querySelector('.menudesktop')
let closeMenuDesTop = document.querySelector('.close-menu')
let openMenuMobile = document.querySelector('.header__mobile .header__mobile-open')
let menuMobile = document.querySelector('.menumobile')
let toTop = document.querySelector('.footer .footer__totop')

document.addEventListener('scroll', function() {
    const pageYOffset = window.pageYOffset
    if(pageYOffset > 300) {
                header.classList.add('active')
                menuDeskTop.classList.remove('active')
            }else {
                header.classList.remove('active')
            }
})
openMenuDeskTop.addEventListener('click', function(e) {
    e.stopPropagation()
    menuDeskTop.classList.add('active')
})
closeMenuDesTop.addEventListener('click', function(e) {
    e.stopPropagation()
    menuDeskTop.classList.remove('active')
})
document.addEventListener('click', function(){
    menuDeskTop.classList.remove('active')
})
openMenuMobile.addEventListener('click', function() {
    menuMobile.classList.toggle('active')
})

toTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
})