var featureHeight;
function toggleFeatures(tile = -1){
    if(tile != -1) {
        hideFeatureTiles();
        showFeatureDetail(tile);
    }
    else {
        hideModal();
        showFeatureTiles();
    }
}

function hideFeatureTiles() {
    $('#features-tiles').hide();
}

function showFeatureDetail(name) {
    name = '#' + name;
    $(name).show();
    $('#feature-controls').show();
}
function hideModal() {
    
}
function showFeatureTiles() {
    
}
