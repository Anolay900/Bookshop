$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        variableWidth: true,
    });

    $('.slidertop').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 5,
    });

    $('.sliderbook').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 2,
    });
});