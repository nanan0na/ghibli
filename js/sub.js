$(function () {
  // company,news
  AOS.init();

  // help
  $('.faq-list li').on('click', function () {
    $('.faq-list li').removeClass('active');
    $(this).addClass('active');
  });

  gsap.registerPlugin(ScrollTrigger);
  let visibleChildCount = 4; // 초기에 보이는 자식의 수
  // splitting

  // 스크롤 이벤트 트리거 설정
  $('.talk').each((index, element) => {
    gsap.from(element, {
      x: $(element).hasClass('faq-a') ? -50 : 50, // faq-a는 x: 50, 나머지는 x: -50
      autoAlpha: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%', // 스크롤 시작 위치
        end: '+=50%',
        toggleActions: 'play none none play', // 처음 보일 때는 play, 나갈 때는 none, 다시 들어올 때는 play
        scrub: 1, // 스크롤 속도에 따라 애니메이션 속도 조절
      },
    });
  });

  // more-faq 버튼 클릭 이벤트
  $('.more-faq').on('click', function () {
    const $talkElements = $('.talk');
    const currentElement = $talkElements[visibleChildCount];

    // 현재 보이는 자식의 다음 자식부터 설정된 수만큼 보이도록 변경
    $(currentElement).css({ display: 'flex' });

    gsap.from(currentElement, {
      autoAlpha: 0,
      display: 'flex',
      ease: 'power1.out',
      duration: 0.5,
      x: $(currentElement).hasClass('faq-a') ? -50 : 50, // faq-a는 x: 50, 나머지는 x: -50
    });

    visibleChildCount++; // 다음에는 다음 자식을 보이게 하기 위해 카운트 증가
  });

  // ScrollTrigger를 다시 초기화하여 새로운 요소가 나타날 때 애니메이션을 정상적으로 작동하게 함
  ScrollTrigger.refresh();
});
