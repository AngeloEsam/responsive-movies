var header = document.querySelector('header');
var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll',function(){
  header.classList.toggle('shadow',window.scrollY > 0);
});

menu.onclick=function(){
  // menu.classList.toggle('bx-x')
  // navbar.classList.toggle('active');
}

window.onscroll=function(){
  menu.classList.remove('bx-x')
  navbar.classList.remove('active');
}

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
    
  });

  var swiper2 = new Swiper(".coming-container",{
    spaceBetween:20,
    loop:true,
    autoplay: {
      delay: 55000,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints:{
    0:{
        slidesPerView:2
    },
    568:{
      slidesPerView:3
  },
  768:{
    slidesPerView:4
},
968:{
  slidesPerView:5
},
  }
})


//var x = document.querySelector('.bx-x')
//console.log(x)
menu.addEventListener('click',function(){
  navbar.classList.toggle('lk')
  console.log('f')
 
})
