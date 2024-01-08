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

  // 스크롤 이벤트 트리거 설정
  $('.talk').each((index, element) => {
    gsap.from(element, {
      x: $(element).hasClass('faq-a') ? -50 : 50,
      autoAlpha: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: '+=50%',
        markers: true,
        toggleActions: 'play none none play',
        scrub: 1, // 스크롤 속도에 따라 애니메이션 속도 조절
      },
    });
  });

  // more-faq 버튼 클릭 이벤트
  $('.more-faq').on('click', function () {
    const $talkElements = $('.talk');
    const currentElement = $talkElements[visibleChildCount];

    // 현재 보이는 자식의 다음 자식부터 설정된 수만큼 보이도록 변경
    for (let i = 0; i < 2; i++) {
      const nextIndex = visibleChildCount + i;
      if (nextIndex < $talkElements.length) {
        const nextElement = $talkElements[nextIndex];
        $(nextElement).css({ display: 'flex' });

        gsap.from(nextElement, {
          autoAlpha: 0,
          display: 'flex',
          ease: 'power1.out',
          duration: 0.5,
          x: $(nextElement).hasClass('faq-a') ? -50 : 50,
        });
      }
    }

    visibleChildCount += 2; // 다음에는 다음 자식을 보이게 하기 위해 카운트 증가
  });

  ScrollTrigger.refresh();
});
