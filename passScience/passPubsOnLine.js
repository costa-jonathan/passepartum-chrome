const url = "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.replace('/', '%2F').replace(':', '%3A').replace('abs', 'epdf')
    + "&federationId=http%3A%2F%2Fukfederation.org.uk&targetSP=https%3A%2F%2Fpubsonline.informs.org&requesterId=https%3A%2F%2Fpubsonline.informs.org%2Fshibboleth"

let broughtToYouByTum = document.querySelector("#pb-page-content > div > header > div > div > div.top-nav.hidden-sm.hidden-xs > div.top-nav__institution.cloned.hidden-xs.hidden-sm > div > div > span.institution__name")
if (!document.body.contains(broughtToYouByTum)) {
    injectButton(url)
}

// tested with
// https://pubsonline.informs.org/doi/10.1287/mnsc.2022.4572
