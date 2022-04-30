// construct login url with redirect to current page
const url = "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.replace('/', '%2F').replace('doi', 'doi/epdf')
    + "&federationId=http%3A%2F%2Fukfederation.org.uk&targetSP=https%3A%2F%2Fepubs.siam.org&requesterId=https%3A%2F%2Fepubs.siam.org%2Fshibboleth"

// inject login button with constructed url matching the login options of the page
try {
    document.querySelector("#pb-page-content > div > div > main > article > div > div.col-md-8.col-lg-9.article__content.has-sections > nav > div.article__navbar__row.tos-list__wrapper > ul > li")
        .insertAdjacentHTML('afterend', "<li class=\"article__navbar__col\">" +
            "                <a href=\"" + url + "\" class=\"ctrl\" style=\"display:flex; height:34px; width: 120px;\">" +
            "                   <img id='logo' alt='passepartum-logo' width='25' height='25'>" +
            "                   <span>Passepartum</span>" +
            "                </a>" +
            "            </li>"
        );
        // inject passepartum icon
        document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")
} catch (e) {
    console.warn('trying to insert again in 2 seconds')
}


// because page isn't fast enough to load the menu - a while loop would be better than this weird nesting to try over and over again but for now this works todo implement the while loop
setTimeout(function() {
    try {
        document.querySelector("#pb-page-content > div > div > main > article > div > div.col-md-8.col-lg-9.article__content.has-sections > nav > div.article__navbar__row.tos-list__wrapper > ul > li")
            .insertAdjacentHTML('afterend', "<li class=\"article__navbar__col\">" +
                "                <a href=\"" + url + "\" class=\"ctrl\" style=\"display:flex; height:34px; width: 120px;\">" +
                "                   <img id='logo' alt='passepartum-logo' width='25' height='25'>" +
                "                   <span>Passepartum</span>" +
                "                </a>" +
                "            </li>"
            );
        // inject passepartum icon
        document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")
    } catch (e) {
        console.warn('trying to insert again in 3 seconds')
        setTimeout(function() {
            document.querySelector("#pb-page-content > div > div > main > article > div > div.col-md-8.col-lg-9.article__content.has-sections > nav > div.article__navbar__row.tos-list__wrapper > ul > li")
                .insertAdjacentHTML('afterend', "<li class=\"article__navbar__col\">" +
                    "                <a href=\"" + url + "\" class=\"ctrl\" style=\"display:flex; height:34px; width: 120px;\">" +
                    "                   <img id='logo' alt='passepartum-logo' width='25' height='25'>" +
                    "                   <span>Passepartum</span>" +
                    "                </a>" +
                    "            </li>"
                );
            // inject passepartum icon
            document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")
        }, (3500));
    }
}, (1500));



