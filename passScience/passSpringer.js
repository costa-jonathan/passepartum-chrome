// construct login url with redirect to current page
const url = "https://sp.springer.com/saml/login?idp=https://tumidp.lrz.de/idp/shibboleth&targetUrl=" + location.href;

injectButton(url)

// kind of works but better checking if access is granted by tum todo