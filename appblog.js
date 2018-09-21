$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
    $('.header').css('background','Black');
    $('.menu a').css('color','White');
    } else {
    $('.header').css('background','transparent');
    $('.menu a').css('color','White');
    }
    });

