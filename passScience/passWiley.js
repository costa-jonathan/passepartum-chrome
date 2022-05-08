// nach doi: %3Fsaml_referrer %3F = ? but does not matter
const url = "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.replace('/', '%2F').replace(':', '%3A').replace('doi', 'doi/epdf')
    + "&federationId=http%3A%2F%2Fukfederation.org.uk&targetSP=https%3A%2F%2Fonlinelibrary.wiley.com&requesterId=https%3A%2F%2Fonlinelibrary.wiley.com%2Fshibboleth"

// inject login button with constructed url matching the login options of the page
document.querySelector("#article__content > div.fixedCoolBar > nav > div > div.coolBar__second.rlist > div.coolBar__section.coolBar--download.PdfLink.cloned")
    .insertAdjacentHTML('afterend',
        "<div class=\"coolBar__section coolBar--download PdfLink cloned\" style=\"margin-left:10px\">" +
        "   <a href=\"" +url + "\" title=\"passepartum\" class=\"coolBar__ctrl pdf-download\">" +
        "   <img id='logo' alt=\"passepartum-logo\">Passepartum</a>" +
        "</div>")
// inject passepartum icon (quite small but i guess fine)
document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-blue.svg")