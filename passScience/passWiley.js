// nach doi: %3Fsaml_referrer %3F = ? but does not matter
const url = "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.replace('/', '%2F').replace(':', '%3A').replace('doi', 'doi/epdf')
    + "&federationId=http%3A%2F%2Fukfederation.org.uk&targetSP=https%3A%2F%2Fonlinelibrary.wiley.com&requesterId=https%3A%2F%2Fonlinelibrary.wiley.com%2Fshibboleth"

injectButton(url)