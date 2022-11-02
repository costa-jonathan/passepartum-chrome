// construct login url with redirect to current page
const url = "https://sp.nature.com/saml/login?idp=https://tumidp.lrz.de/idp/shibboleth&targetUrl=" + location.href;

injectButton(url)

// tested with
// https://www.nature.com/articles/s41579-022-00817-7