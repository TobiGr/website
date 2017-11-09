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
    //$('#features1').css('height', featureHeight + 'px');
    setTimeout(function(){$('#features1').css('height', featureHeight + 'px');},500);
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