var t = $("#trigger").offset().top;

$(document).scroll(function () {
    if ($(window).height() + $(this).scrollTop() > t) {
        $("#banner").animate({
            'opacity': '1'
        }, 5500);
    }
});