// construct login url with redirect to current page
const url = "https://sp.nature.com/saml/login?idp=https://tumidp.lrz.de/idp/shibboleth&targetUrl=" + location.href;

// inject login button with constructed url matching the login options of the page
document.querySelector("#entitlement-box-right-column > div.js-access-button")
    .insertAdjacentHTML('beforeend', "<div class='js-access-button'>" +
        "<a class='c-article__button' href='" + url + "'><img id='logo' alt='passepartum-logo' width='25' height='25' style=\"margin-top: -3px;margin-left: -5px\">Acess TUM with passepartum</a></div>");

// inject passepartum icon
document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")


// inject a second login button at a second location where there are login options on the page
document.querySelector("#entitlement-box-main-column-unentitled > div.js-access-button")
    .insertAdjacentHTML('beforeend', "<div class='js-access-button'>" +
        "<a class='c-article__button' href='" + url + "'><img id='logo2' alt='passepartum-logo' width='25' height='25' style=\"margin-top: -3px;margin-left: -5px\">Acess TUM with passepartum</a></div>");

// inject passepartum icon
document.getElementById('logo2').src = chrome.runtime.getURL("icons/icons8-key-white.svg")