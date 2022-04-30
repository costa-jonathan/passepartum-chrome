// construct login url with redirect to current page
const url = location.href.replace('https://www.science.org', '') // cut the front
    .split('#')[0] // cut the end
    .replace('/', '%2F') // encode

// check if paper even available if already logged in
if ((document.querySelector("#mainNavbar > div > div > div.col.justify-content-end.d-flex.p-0.header-row__item > ul > li:nth-child(1) > div > div > div.institution__content > span.institution__name"))
    && (document.querySelector("#frontmatter > header > div > div.info-panel > div.info-panel__right-items-wrapper > div.info-panel__formats.info-panel__item > a > span").textContent === 'get access')) {
    // if already logged in and paper not available add a login button which alerts the user that not available
    document.querySelector("#frontmatter > header > div > div.info-panel > div.info-panel__right-items-wrapper")
        .insertAdjacentHTML('beforeend', "<div class='info-panel__formats info-panel__item'>" +
            "<a class='btn ml-0' onclick=\"return confirm('This paper seems not to be available for TUM staff')\">" +
            "<img id='logo' alt='passepartum-logo' width='32'></a></div>");
} else {
    // if not logged in yet: inject login button with constructed url matching the login options of the page
    document.querySelector("#frontmatter > header > div > div.info-panel > div.info-panel__right-items-wrapper")
        .insertAdjacentHTML('beforeend', "<div class='info-panel__formats info-panel__item'>" +
            "<a class='btn ml-0' href='http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri=http%3A%2F%2Fwww.science.org" + url + "&targetSP=https%3A%2F%2Fwww.science.org&requesterId=https%3A%2F%2Fwww.science.org%2Fshibboleth'>" +
            "<img id='logo' alt='passepartum-logo' width='32'></a></div>");
}

// inject passepartum icon
document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-blue.svg")