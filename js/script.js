$(document).ready(function(){
    $('.slider__inner').slick(
        {
            speed: 1200,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/chevron-left-solid.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="images/icons/chevron-right-solid.png"></button>'
        }
    );
});