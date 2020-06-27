(function ($) {
  "use strict";

  // header bg
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('header').addClass('header-bg');
    } else {
      $('header').removeClass('header-bg');
    }

  })

  //wow js
  new WOW().init();

  //portfolio link
  $(".portfolio-item").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  //slick js
  $('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    prevArrow: ".portfolio-prev",
    nextArrow: ".portfolio-next",
    swipe: true,
    swipeToSlide: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // slick js
  $('.company-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: ".company-prev",
    nextArrow: ".company-next",
    swipe: true,
    swipeToSlide: true,
  });

  // slick js
  $('.blog-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2500,
    prevArrow: ".blog-prev",
    nextArrow: ".blog-next",
    // swipe: true,
    // swipeToSlide: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //sticky navbar
  $("header").sticky({
    topSpacing: 0,
    zIndex: 99,
  });

  //smooth scroll js
  var scroll = new SmoothScroll('a[href*="#"]');

  //scrollspy
  const instance = new Gumshoe('.main-menu li a');

})(jQuery);