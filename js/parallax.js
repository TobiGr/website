var headerHeight;

function parallax_reset() {
    headerHeight = $('.header-wrapper').outerHeight(true);
    /* check whether the height can encrease as navbar can be (un-)collapsed */
    if($(window).width() > 767){
        $('.header-background').css('height', headerHeight + 800 + 'px');
    }
    else {
        if(headerHeight < $(window).height()) $('.header-background').css('height', '100vh');
    }
}

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.header-background').css('height', (headerHeight + 800 - scrolled) + 'px');
}

$(window).scroll(function(e) {
    if($(window).width() > 767){
        parallax();
    }
});

$(window).resize(function(e) {
    /* timeout because gallery_resize needs some time to execute - only nacessary until parallax is pure CSS without JS */
    window.setTimeout(function(){
        parallax_reset();
        parallax();
    },100);
});

parallax_reset();
if($(window).width() > 767) parallax();