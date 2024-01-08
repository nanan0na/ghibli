$(function () {
  // lang-toggle
  $('.toggle-lang-change').on('click', () => {
    $('.toggle-lang').toggleClass('active');
  });

  // menu
  $('.btn-menu').on('click', function () {
    const menuOpen = $('<div class="menu-open"></div>');
    if ($('.util').children('.menu-open').length === 1) {
      $('.util').append(menuOpen);
    } else if ($('.util').children('.menu-open').length === 0) {
      $('.util .menu-open').remove();
    }
    $(
      '.logo a, .gnb, .gnb li a, .menu-open, .toggle-lang, .btn-menu, .line, .toggle-lang-change, .headerSns'
    ).toggleClass('active');
  });

  // cast
  const cast = $('.cast');
  const tl = gsap.timeline();

  cast.on('click', () => {
    cast.toggleClass('active');

    tl.fromTo('.cast-text', { autoAlpha: 0 }, { autoAlpha: 1, delay: 0.4 });
  });
});
