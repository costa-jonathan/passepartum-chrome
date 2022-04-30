// construct login url with redirect to current page
const url = "https://sp.springer.com/saml/login?idp=https://tumidp.lrz.de/idp/shibboleth&targetUrl=" + location.href;

try {
    // inject login button with constructed url matching the login options of the page
    document.querySelector("body > div.c-page-layout.c-page-layout--sticky-footer > div.c-page-layout__header > div.u-position-relative > header > div > div.c-header__navigation")
    .insertAdjacentHTML('beforeend', "<a href=\"" + url + "\" class=\"c-header__link c-header__link--search\">" +
        "        <span class=\"u-display-flex u-align-items-center\">" +
        "            <span class=\"u-text-sm\">Passepartum</span>" +
        "             <img id='logo' alt='passepartum-logo' width='27' height='27'>" +
        "        </span>\n" +
        "    </a>"
    )
    // inject passepartum icon
    document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-blue.svg")
} catch (e) {
    // inject login button with constructed url matching the login options of the page
    document.querySelector("body > div.u-vh-full > div.u-position-relative > header > div > div.c-header__navigation")
        .insertAdjacentHTML('afterend', "<a href=\"" + url + "\" class=\"c-header__link c-header__link--search\">" +
            "        <span class=\"u-display-flex u-align-items-center\">" +
            "            <span class=\"u-text-sm\">Passepartum</span>" +
            "             <img id='logo1' alt='passepartum-logo' width='27' height='27'>" +
            "        </span>\n" +
            "    </a>"
        )
    // inject passepartum icon
    document.getElementById('logo1').src = chrome.runtime.getURL("icons/icons8-key-blue.svg")
}