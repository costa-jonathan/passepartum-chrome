// construct login url with redirect to current page
const url = "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.replace('/', '%2F').replace('doi', 'doi/epdf')
    + "&federationId=http%3A%2F%2Fukfederation.org.uk&targetSP=https%3A%2F%2Fepubs.siam.org&requesterId=https%3A%2F%2Fepubs.siam.org%2Fshibboleth"

injectButton(url)

// tested with:
// https://epubs.siam.org/doi/epdf/10.1137/21M1409949
// goes directly to paper already