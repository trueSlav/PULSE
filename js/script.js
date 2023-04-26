$(document).ready(function(){
    $('.slider__inner').slick(
        {
            speed: 1200,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/chevron-left-solid.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="images/icons/chevron-right-solid.png"></button>',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    mobileFirst: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true,
                    swipeToSlide: true,
                    arrows: false,
                    mobileFirst: true
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true,
                    swipeToSlide: true,
                    arrows: false,
                    mobileFirst: true
                  }
                }
            ]
        }
    );

    $('ul.catalog__tabs').on('click', 'li:not(.catalog_active)', function() {
        $(this)
          .addClass('catalog_active').siblings().removeClass('catalog_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-card__content').eq(i).toggleClass('catalog-card__content_active');
                $('.catalog-card__information').eq(i).toggleClass('catalog-card__information_active');
            });
        }); 
    }
    toggleSlide('a.catalog-card__link');
    toggleSlide('a.catalog-card__back');

    // Modal

    $('[data-modal=consultation]').on('click', function(){
      $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #sucsess').fadeOut();
    });
    $('.button_card').on('click', function(){
      $('.overlay, #order').fadeIn();
    });
});