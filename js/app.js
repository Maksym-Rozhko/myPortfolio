new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
      },
});