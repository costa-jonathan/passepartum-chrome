

// get the current url to extract doi
let url = location.href;
url = url.replace('https://www.science.org', '').split('#')[0].replace('/', '%2F')
// check if paper even available if already logged in
if ((document.querySelector("#mainNavbar > div > div > div.col.justify-content-end.d-flex.p-0.header-row__item > ul > li:nth-child(1) > div > div > div.institution__content > span.institution__name"))
&& (document.querySelector("#frontmatter > header > div > div.info-panel > div.info-panel__right-items-wrapper > div.info-panel__formats.info-panel__item > a > span").textContent === 'get access')) {
    document.querySelector("#frontmatter > header > div > div.info-panel > div.info-panel__right-items-wrapper")
        .insertAdjacentHTML('beforeend', "<div class='info-panel__formats info-panel__item'>" +
            "<a class='btn ml-0' onclick=\"return confirm('This paper seems not to be available for TUM staff')\">" +
            "<img id='logo' alt='passepartum-logo' width='32'></a></div>");

} else {
    document.querySelector("#frontmatter > header > div > div.info-panel > div.info-panel__right-items-wrapper")
        .insertAdjacentHTML('beforeend', "<div class='info-panel__formats info-panel__item'>" +
            "<a class='btn ml-0' href='http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri=http%3A%2F%2Fwww.science.org" + url + "&targetSP=https%3A%2F%2Fwww.science.org&requesterId=https%3A%2F%2Fwww.science.org%2Fshibboleth'>" +
            "<img id='logo' alt='passepartum-logo' width='32'></a></div>");
}

document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-schlussel-128.png")
