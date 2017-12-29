$('#features2').click(function(){
    $('#features2 .progress-bar').addClass('active');
});

$(window).on("orientationchange load resize", function () {
    if ($(window).width() > 544) {
        $('#features2 *').attr('data-role', 'none');
    }
});