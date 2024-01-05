$(function () {
  var swiper = new Swiper('.visual', {
    // visual slide
    pagination: {
      el: '.swiper-dot',
      clickable: true,
    },
    /*  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
    pauseOnMouseEnter: true,
    loop: true,
  });

  // work
  const $worksEvent = $('.works-item1-text');
  const $busImg = $('.bus-img');
  gsap.to('.bus-img', {
    x: -600,
    //스크롤과 연동시키기
    scrollTrigger: {
      trigger: '.bus-img',
      // markers: true,
      // start: 'top 60%',
      toggleActions: 'play reverse restart restart',
      scrub: 1,
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
});
