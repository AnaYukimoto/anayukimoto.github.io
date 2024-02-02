$(document).ready(function () {
    function setupSlickCarousel() {
      $('.slick-carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="slick-prev"><i class="fa-solid fa-caret-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa-solid fa-caret-right"></i></div>',
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    }

    setupSlickCarousel();
  });