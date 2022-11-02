// construct login url with redirect to current page
const url = "https://pubs.acs.org/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.split('#')[0] // cut the end
        .replace('/', '%2F').replace(':', '%3A') // encode
    + "&federationId=urn%3Amace%3Aincommon"

let broughtToYouByTum = document.querySelector("#pb-page-content > div > header > div.header_topbar.hidden-sm.hidden-xs > div > div > div.col-lg-9.col-md-8.col-sm-7.header_topbar_right > div.institution > span > span.institution__intro")
if (!document.body.contains(broughtToYouByTum)) {
    injectButton(url)
}

// testing with
// https://pubs.acs.org/doi/10.1021/acs.jpcc.1c10156 (tum has access)