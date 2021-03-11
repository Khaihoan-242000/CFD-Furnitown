let pageYOffset = window.pageYOffset
let openMenuMobile = document.querySelector('.header__mobile .header__mobile-open')
let menuMobile = document.querySelector('.menumobile')

document.addEventListener('scroll', function() {
    const pageYOffset = window.pageYOffset
    if(pageYOffset > 300) {
                header.classList.add('active')
                // menuDeskTop.classList.remove('active')
            }else {
                header.classList.remove('active')
            }
})

penMenuMobile.addEventListener('click', function() {
    menuMobile.classList.toggle('active')
})