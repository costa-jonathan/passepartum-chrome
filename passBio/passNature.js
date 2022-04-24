const url = "https://sp.nature.com/saml/login?idp=https://tumidp.lrz.de/idp/shibboleth&targetUrl=" + location.href;


document.querySelector("#entitlement-box-right-column > div.js-access-button")
    .insertAdjacentHTML('beforeend', "<div class='js-access-button'>" +
        "<a class='c-article__button' href='" + url + "'><img id='logo' alt='passepartum-logo' width='25' height='25' style=\"margin-top: -3px;margin-left: -5px\">Acess TUM with passepartum</a></div>");

document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")


document.querySelector("#entitlement-box-main-column-unentitled > div.js-access-button")
    .insertAdjacentHTML('beforeend', "<div class='js-access-button'>" +
        "<a class='c-article__button' href='" + url + "'><img id='logo2' alt='passepartum-logo' width='25' height='25' style=\"margin-top: -3px;margin-left: -5px\">Acess TUM with passepartum</a></div>");

document.getElementById('logo2').src = chrome.runtime.getURL("icons/icons8-key-white.svg")



// https://wayf.springernature.com/?redirect_uri=https%3A%2F%2Fwww.nature.com%2Farticles%2Fnbt0999_889/