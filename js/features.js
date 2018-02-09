/**
 * IDs of all feature slides
 * @type {Array}
 */
var features = [
    "lightweight", "downloads", "privacy", "background",
    "popup", "subscriptions", "history", "code", "price", "4k"];

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

/**
 * Onclick-listener for the features
 * Changes the slides
 */
$('#features-sidebar .list-group a').click(function (event) {
    event.preventDefault();
    var hash = $(this).attr('href');
    $('.feature2-detail.active').removeClass('active');
    $(hash).addClass('active');
    history.pushState(null, null, hash);
});

/**
 * Check if the hash changed and update the features if necessary
 */
$(window).on('hashchange load', function(e){
    var hash = window.location.hash;
    console.log(">"+hash);
    if (hash != "" && hash != null && hash != "undefined"
        && features.includes(hash.substr(1))
        && !$(hash).hasClass('active')) {
        $('.feature2-detail.active').removeClass('active');
        $(hash).addClass('active');
    }
});