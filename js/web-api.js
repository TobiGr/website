/**
 * @author TobiGr and Team NewPipe
 * This document provides everything to get information
 * the NewPipe web-api {@link https://gtihub.com/TeamNewPipe/web-api}.
 *
 * Elements which expect to receive information from the web-api
 * automatically, need to have an attribute of the following scheme:
 *      data-newpipe-api="JSON_IDENTIFIER_OF_THE_REQUESTED_VALUE"
 *
 * By default, the inner HTML of the elements having the above's attribute is replaced.
 * You can also specify an attribute to store the API data instead:
 *      data-newpipe-api-attribute="ATTRIBUTE_NAME"
 *
 *  Example:
 *  {@code <a href="https:example.com" data-newpipe-api="flavors.fdroid.stable.apk" data-newpipe-api-attribute="href">
 *      download APK</a> }
 */

/**
 * Stores the web-api data
 * @type {null | JSON}
 */
let api = null;

function getAPIData() {
    return api;
}

/**
 * Recursive function to update elements with API data
 * @param {Object | string} object - Object or value from the api object
 * @param {string} key - key of the object
 * @param {null | string} oldIdentifier
 * @return {void}
 */
function updateWithAPIData(object, key, oldIdentifier) {
    let newIdentifier = (oldIdentifier === null) ? key : oldIdentifier + '.' + key;
    if (object instanceof Object) {
        // this is a JSON object with more objects inside
        // iterate through them
        Object.keys(object).forEach(function (name) {
            updateWithAPIData(object[name], name, newIdentifier);
        });
    } else {
        if (object === -1) return; // invalid value, something went wrong when building the API data
        // this object is a value
        // get all elements listening for it
        let elementsToUpdate = document.querySelectorAll('[data-newpipe-api="' + newIdentifier + '"]');
        if (elementsToUpdate == null) return;

        let data = object.toString();
        for (let i = 0; i < elementsToUpdate.length; i++) {
            if (elementsToUpdate.item(i).hasAttribute("data-newpipe-api-attribute")) {
                // the element requests to set an attribute to the api value
                let attr = elementsToUpdate.item(i).getAttribute("data-newpipe-api-attribute");
                elementsToUpdate.item(i).setAttribute(attr, data);
            } else {
                // default: set the inner HTML of the element to the api value
                elementsToUpdate.item(i).innerHTML = data;
            }
        }
    }
}

/**
 * Updates every element which expects to receive information
 * from the web-api
 * @return {void}
 */
function updateAllWithAPIData() {
    Object.keys(api).forEach(function (name) {
        updateWithAPIData(api[name], name, null);
    })
}

/**
 * Get API information and trigger updates
 */
$(document).ready(function () {
    $.get("https://newpipe.schabi.org/api/data.json", "json")
        .done(function(resp) {
            api = resp;
            updateAllWithAPIData();
        })
        .fail(function() {
            console.log("An error occurred while getting Web-API data from https://newpipe.schabi.org/api/data.json");
        });
});
