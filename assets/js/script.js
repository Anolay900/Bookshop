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
        mobileFirst:true,

        responsive:[
            {
                breakpoint: 240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },{
                breakpoint: 320,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }
        ]
    });

    $('.sliderbook').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        mobileFirst:true,

        responsive:[
            {
                breakpoint: 240,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
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