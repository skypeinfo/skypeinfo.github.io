var t = $("#trigger").offset().top;

$(document).scroll(function () {
    if ($(window).height() + $(this).scrollTop() > t) {
        $("#banner").animate({
            'opacity': '1'
        }, 5500);
    }
});

//MobileDetect
function screenClass() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("Website broken on mobile, sorry.");
    }
}

// Fire.
screenClass();