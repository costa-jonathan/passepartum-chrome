// construct login url with redirect to current page
const url =
    "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri=http%3A%2F%2F" // preamble
    + location.href.replace('https://', '') // cut the front
    .split('#')[0] // cut the end
    .replace('/', '%2F') // encode
    + "&targetSP=https%3A%2F%2Fwww.science.org&requesterId=https%3A%2F%2Fwww.science.org%2Fshibboleth" // redirect target

// check if paper even available if already logged in
if ((document.querySelector("#mainNavbar > div > div > div.col.justify-content-end.d-flex.p-0.header-row__item > ul > li:nth-child(1) > div > div > div.institution__content > span.institution__name"))
    && (document.querySelector("#frontmatter > header > div > div.info-panel > div.info-panel__right-items-wrapper > div.info-panel__formats.info-panel__item > a > span").textContent === 'get access')) {
    // if already logged in and paper not available add a login button which alerts the user that not available
    document.body.innerHTML += ("" +
        "<a onclick=\"return confirm('You are already logged in. This paper does not seem to be available for TUM staff')\" title=\"TUM\" style='position: fixed; background: darkred; width: 2.5rem; height: 2.5rem; bottom: 2rem; left: 2rem; z-index:130; border-radius: 4rem; box-shadow: 2px 4px 6px 1px rgba(0,0,0,0.5);'>" +
        "<img id='logo' style='max-width: 100%' alt='passepartum-logo'>" +
        "</a>"
    );
    // inject passepartum icon
    document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")
} else {
    // if not logged in yet: inject login button with constructed url matching the login options of the page
    injectButton(url)
}


