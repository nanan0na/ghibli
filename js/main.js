var swiper = new Swiper('.visual', {
  // visual slide
  pagination: {
    el: '.swiper-dot',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pauseOnMouseEnter: true,
  loop: true,
});

// event slide
var eventSwiper = new Swiper('.event-image-wrap', {
  effect: 'cards',
  grabCursor: true,
  rotate: true,
  loop: true,
  mousewheel: {
    invert: false,
  },
});
