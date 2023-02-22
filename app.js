const modalBtn = document.querySelector('.modal__btn')
const modalChat = document.querySelector('.modal__chat')
const chatIcon = document.querySelector('.t825__icon')
const closeIcon = document.querySelector('.t825__icon-close')

modalBtn.addEventListener('click', () => {
    modalBtn.classList.toggle('active')
    chatIcon.classList.toggle('active')
    closeIcon.classList.toggle('active')
    modalChat.classList.toggle('active')
})


const text = document.querySelectorAll('.section7__wrapper');
const images = document.querySelectorAll('.section7__popup-img-wrapper')

Array.from(text)

text.forEach((el,i) => {
    el.addEventListener('mouseover', () => {
        images[i].classList.add('active')
        console.log(images[i])
    })

    el.addEventListener('mouseleave', () => {
        images[i].classList.remove  ('active')
    })
})



var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopSlides: 6,
    slidesPerView: 1,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    slidesPerView:1,
    slidesPerGroupSkip: 1,
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: true,
    autoHeight: true,
  });


  document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
      });
    });
  });


  const applicationBtn = document.querySelector('.application__btn')
  const modalForm = document.querySelector('.modal__form-blur')
  const modalClose = document.querySelector('.modal__close-btn')

  applicationBtn.addEventListener('click', () => {
    modalForm.classList.add('active')
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    modalForm.style.paddingRight = '15px';
  })

  modalClose.addEventListener('click', () => {
    modalForm.classList.remove('active')
    document.body.style.overflow = 'visible'
    document.body.style.height = 'auto';
    modalForm.style.paddingRight = '0px';
  })

