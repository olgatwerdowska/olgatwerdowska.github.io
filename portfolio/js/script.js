$(document).ready(function () {
    $('.skills-section_wrap').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
        }
      ]
    });


    let menuBtn = $('.burger-menu');
    let menu = $('.top-nav_menu');
    menuBtn.on('click', function (event) {
        menu.toggleClass("hidden");
    })
});