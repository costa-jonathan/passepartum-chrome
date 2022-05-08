const url = "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.replace('/', '%2F').replace(':', '%3A').replace('abs', 'epdf')
    + "&federationId=http%3A%2F%2Fukfederation.org.uk&targetSP=https%3A%2F%2Fpubsonline.informs.org&requesterId=https%3A%2F%2Fpubsonline.informs.org%2Fshibboleth"


// inject login button with constructed url matching the login options of the page
document.querySelector("#pb-page-content > div > main > article > div > div.col-md-2.gutterless--md.coolbar-column.fixed-element > nav > div > ul.rlist.article-coolBar__first > li")
    .insertAdjacentHTML('beforeend', "<div class=\"download_transportable cloned hidden-xs hidden-sm hidden-md\" style=\"display:flex;\">" +
        "<a href=\"" + url + "\" class=\"btn\" style=\"height: 41px; display:flex;  justify-content:center\">" +
        "<img id='logo' alt='passepartum-logo' width='27' height='27' style=\"margin-top: -5px\">" +
        "<div style='margin-left: 5px'>Passepartum</div></a></div>"
    )
// inject passepartum icon
document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")


// second on in the header - cannot get the spacing right - for now without - maybe implement later
// document.querySelector("#pb-page-content > div > header > div > div > div.container.header--first-row > div.pull-right > div > div.left-border.col-lg-4.col-md-4.col-xs-2")
//     .insertAdjacentHTML('afterend', "<div class=\"left-border col-xs-2\">" +
//         "<a href=\"" + url + "\">" +
//         "<img id='logo2' alt='passepartum-logo' width='27' height='27'>" +
//         "</a>" +
//         "</div>"
//     )
// inject passepartum icon
// document.getElementById('logo2').src = chrome.runtime.getURL("icons/icons8-key-blue.svg")
