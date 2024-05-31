
alert("hello visiter welcome to culture exppress");

  var swiper = new Swiper(".mySwiper", {
    effect: 'fade',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// var swiper = new Swiper(".mySwiper", {
//     rewind: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });