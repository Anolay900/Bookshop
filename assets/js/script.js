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
        slidesToScroll: 2,
    });
});

function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="read more";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="hide";
        more.style.display="inline";
    }
}