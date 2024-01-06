$(function () {
  // lang-toggle
  $('.toggle-lang-change').on('click', () => {
    $('.toggle-lang').toggleClass('active');
  });

  // cast
  const cast = $('.cast');
  const tl = gsap.timeline();

  cast.on('click', () => {
    cast.toggleClass('active');

    tl.fromTo('.cast-text', { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.4 });
  });
});
