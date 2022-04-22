

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


'/as/yrJ4U/resume/as/authorization.ping?client_id=SDFE-v3&state=retryCounter%3D0%26csrfToken%3D7b65aa65-769e-4e86-8127-02a7b07d2f73%26idpPolicy%3Durn%253Acom%253Aelsevier%253Aidp%253Apolicy%253Aproduct%253Ainst_assoc%26returnUrl%3Dhttps%253A%252F%252Fwww.sciencedirect.com%252Fscience%252Farticle%252Fpii%252FS0022214302331263%26prompt%3Dlogin%26cid%3Datp-1fac293b-d271-4bd0-966a-43f62b4ebef1'