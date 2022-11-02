const url = "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.replace('/', '%2F').replace(':', '%3A').replace('doi', 'doi/epdf')
    + "&federationId=http%3A%2F%2Fukfederation.org.uk&targetSP=https%3A%2F%2Fwww.annualreviews.org&requesterId=https%3A%2F%2Fwww.annualreviews.org%2Fshibboleth"


let broughtToYouByTum = document.querySelector("#pb-page-content > div > div:nth-child(1) > div > div > div > div > div:nth-child(1) > header > section.ar-desktop-header > div:nth-child(3) > div.logo-container > div.access-provided > div > div > div > div > span")
if (!document.body.contains(broughtToYouByTum)) {
    injectButton(url)
}

// tested with
// nothing really because everything open access?