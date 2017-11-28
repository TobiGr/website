var featureHeight, currentFeature;
function toggleFeatures(tile = -1){
    if(tile != -1) {
        hideFeatureTiles();
        //showFeatureDetail(tile);
        setTimeout(function(){showFeatureDetail(tile);},500);
    }
    else {
        hideFeatureDetails();
        //showFeatureTiles();
        setTimeout(function(){showFeatureTiles();},500);
    }
}

function hideFeatureTiles() {
    fadeOut('#features-tiles');
    featureHeight = $('#features1').outerHeight();
    var x = $('#features-tiles').outerHeight();
    $('#feature-details').css('max-height', x + 'px');
    //$('#features1').css('height', featureHeight + 'px');
    if($(window).outerWidth > 767) 
        setTimeout(function(){$('#features1').css('height', featureHeight + 'px');},500);
    else
        setTimeout(function(){$('#features1').css('height', 'auto');},500);
    //$('#features-tiles').hide();
}

function showFeatureDetail(name) {
    //alert(name);
    currentFeature = '#' + name;
    $(currentFeature).show();
    $('#feature-controls').show();
    $(currentFeature).removeClass('fadeOut');
    $('#feature-controls').removeClass('fadeOut');
    
}
function hideFeatureDetails() {
    //$(currentFeature).hide();
    fadeOut(currentFeature);
    fadeOut('#feature-controls');
    //$('#' + currentFeature).hide();
    //$('#feature-controls').hide();
}
function showFeatureTiles() {
    $('#features-tiles').removeClass('fadeOut');
    $('#features-tiles').show();
}

function fadeOut(el) {
    $(el).addClass('fadeOut');
    setTimeout(function(){$(el).hide();},500);
}