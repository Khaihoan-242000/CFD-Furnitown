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
openMenuMobile.addEventListener('click', function(e) {
    e.stopPropagation()
    menuDeskTop.classList.add('active')
})

toTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
})
// home slider

let $carousel = $(".slider__list")
$carousel.flickity({
    cellAlign: 'left',
    contain: false,
    wrapAround: true,
    prevNextButtons: false, 
})
$(".slider__btn-prev").on('click', function(e) {
    e.preventDefault()
    $carousel.flickity('previous')
    console.log('ok')
})
$(".slider__btn-next").on('click', function(e) {
    e.preventDefault()
    $carousel.flickity('next')
})