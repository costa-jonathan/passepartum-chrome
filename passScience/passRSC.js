// construct login url with redirect to current page
const url = 'https://www.rsc.org/rsc-id/account/checkfederatedaccess?instituteurl=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&returnurl='
    + location.href.replace('/', '%2F').replace(':', '%3A') // encode


injectButton(url)

// tested with
// https://pubs.rsc.org/en/content/articlelanding/2017/ra/c7ra04583b
// todo: do the inject only if not logged in with TUM
