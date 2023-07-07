/*============================== SHOW MENU ==============================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*============================== MENU SHOW ==============================*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*============================== MENU HIDDEN ==============================*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*============================== CHANGE BACKGROUND HEADER ==============================*/
function scrollHeader(){
  const header = document.getElementById('header')

  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*============================== POPULAR SWIPER ==============================*/
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: 'true',

  breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1368: {
        slidesPerView: 3,
      },
  },
});

/*============================== MIXITUP FILTER FEATURED ==============================*/
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
    target: '.featured__card'
  },
  animation: {
    duration: 300
  }
});

/* Link active featured */
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
  linkFeatured.forEach(l=> l.classList.remove('active-featured'))
  this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*============================== SCROLL UP ==============================*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*============================== SCROLL SECTIONS ACTIVE LINK ==============================*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*============================== SCROLL REVEAL ANIMATION ==============================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal(`.home__car-data`, {delay: 800, interval: 100, origin:'bottom'})
sr.reveal(`.home__button`, {delay: 800, origin:'bottom'})
sr.reveal(`.about__group, .offer__data`, {origin:'left'})
sr.reveal(`.about__data, .offer__img`, {origin:'rigth'})
sr.reveal(`.features__map`, {delay:600, origin:'rigth'})
sr.reveal(`.features__card`, {interval: 300})
sr.reveal(`.featured__card, .logos__content, .footer__content`, {interval: 100})


/*============================== NODE ==============================*/
const express = require('express');

const app = express();

const PORT = 5000;
app.listen(PORT, ()=>{
  console.log(`Server Running on Port:${PORT}`)
})