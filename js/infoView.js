(function ($) {

    $.fn.infoView = function (options) {
        var settings = $.extend({
            // These are the defaults.
            link: "#navigation",
            view: "#view",
            slide: ".slide",
            start: 0
        }, options );

        var currentSlide = settings.start;
        var el = document.getElementById(settings.view).getElementsByClassName(settings.slide);
// Convert the NodeList to an Array
        var arr = jQuery.makeArray( el );
        var slides = jQuery.makeArray(
            document.getElementById(settings.view)
                .getElementsByClassName(settings.slide)
        );
        for(var s in slides) {
            console.log(s);
        }


        $l = $(settings.link);
        $v = $(settings.view);

        $v.each(function () {

        })

        $(settings.link + " a").click(function (event) {
            event.preventDefault();
            var hash = $(this).attr('href');
            $l.find(".active").removeClass("active");
            $(this).addClass("active");
            $v.find(settings.slide + ".active").removeClass("active");
            $(hash).addClass("active");
        })
    };
}(jQuery));

/*



 */