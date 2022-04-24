String.prototype.replaceAt = function(index, replacement) { // credit: https://stackoverflow.com/users/173347/cem-kalyoncu
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const url = "https://pubs.acs.org/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri=" +
location.href.replaceAt(25, 'pdf').replace('/', '%2F').replace(':', '%3A') +
"&federationId=urn%3Amace%3Aincommon"

document.getElementsByClassName('article_header-links pull-left')[0]
    .insertAdjacentHTML('beforeend', "" +
        "<a href=\"" + url + "\" title=\"TUM\" class=\"button_primary pdf-button\ style=\"\">" +
        "<div style='display: flex;margin: -7px 0 -7px -10px;'><img id='logo' alt='passepartum-logo' width='60' height='40'>" +
        "<span style='margin-top: 6px'>Passepartum</span></div></a>"
    );

document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")

