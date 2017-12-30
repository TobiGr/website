$('#features2').click(function(){
    $('#features2 .progress-bar').addClass('active');
});

/*$(window).on("orientationchange load resize", function () {
    if ($(window).width() > 544) {
        $('#features2 *').attr('data-role', 'none');
    }
});*/

/*$("body").page({
    keepNative: "#features2 *"
});*/

$(window).on("orientationchange load resize", function () {
    if ($(window).width() > 767 && $(window).height() < 665 + 60) {
        $('.feature2-media').css('width', 'calc(33% - 15px)');
    }
});

$('#features-sidebar .list-group a').click(function () {
    $('.feature2-detail.active').removeClass('active');
    var dest = $(this).attr('href').substr(1);
    $('#' + dest).addClass('active');
    }
);