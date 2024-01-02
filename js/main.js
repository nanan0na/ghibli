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

  // 반응형 코드
  breakpoints: {
    // 작은 사이즈부터 큰 사이즈까지 (min-width 개념으로 동작)
    600: {},
    860: {},
    1180: {},
  },
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
