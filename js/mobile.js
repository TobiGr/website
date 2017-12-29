$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 768) {
            $('.right').insertBefore('.left');
        }
        else
        {
            $('.left').insertBefore('.right');
        }
    }
});