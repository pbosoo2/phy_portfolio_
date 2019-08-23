$(function () {
  // $(window).scroll(function () {
  //   $('header').css('left', 0 - $(this).scrollLeft());
  // });
  lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true,
  })

  $(".toggle").click(function () {
    $(".main-menu").addClass('show');
    $(".show").slideToggle();
    $(".toggle .top").toggleClass('click-t');
    $(".toggle .center").toggleClass('click-c');
    $(".toggle .bottom").toggleClass('click-b');
  });
  $(".a").click(function () {
    $(".show").slideUp();
    $(".toggle .top").removeClass('click-t');
    $(".toggle .center").removeClass('click-c');
    $(".toggle .bottom").removeClass('click-b');
  });

  $(window).resize(function () {
    if ($(window).width() < 768) {
      //참이면 할일
      $(".main-menu").hide();
      $(".toggle .top").removeClass('click-t');
      $(".toggle .center").removeClass('click-c');
      $(".toggle .bottom").removeClass('click-b');
    }
  });

  // scroll
  var $menu = $('.main-menu li.menu'),
      $contents = $('#contents > section');

  console.log($contents);

  $menu.click(function (x) {
    x.preventDefault();
    $menu.removeClass('on');
    $(this).addClass('on');
    $(this).addClass('on').siblings().removeClass('on');
    var idx = $(this).index();
    var section = $contents.eq(idx);

    var sectionDistance = section.offset().top;
    console.log(sectionDistance);

    $('html,body').stop().animate({ scrollTop: sectionDistance });
  })
  $('.arrow a').click(function (x) {
    x.preventDefault();

    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
  })

  $(window).scroll(function(){
    $contents.each(function(){
        if($(this).offset().top <= $(window).scrollTop()){
            var idx = $(this).index();
            $menu.removeClass('on');
            $menu.eq(idx).addClass('on');
        }
    });
});

출처: https://j07051.tistory.com/505 [흘러간다...];

  // top 버튼
  $('.scroll').click(function (x) {
    x.preventDefault();

    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
  })

  //
  const logo = document.querySelectorAll('#logo path');
  console.log(logo);

  for (let i = 0; i < logo.length; i++) {
    console.log('Letter ${i} is ${logo[i].getTotalLength()}');
  }

  var agent = navigator.userAgent.toLowerCase();

  if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
    $('svg').css({
      'display' : 'none'
    });
    $('.ie-img').css({
      'display' : 'block'
    });
  }

});