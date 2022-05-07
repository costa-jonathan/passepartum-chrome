const url = "http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri="
    + location.href.replace('/', '%2F').replace(':', '%3A').replace('abs', 'pdf')
    + "&federationId=http%3A%2F%2Fukfederation.org.uk&targetSP=https%3A%2F%2Fwww.annualreviews.org&requesterId=https%3A%2F%2Fwww.annualreviews.org%2Fshibboleth"



// inject login button with constructed url matching the login options of the page
document.querySelector("#main-content > div > div > section.ar-content-left-col > article > div.article-info > div:nth-child(2) > div > a.btn.icon-metrics")
    .insertAdjacentHTML('afterend', "<a href=\""+url+"\" class=\"btn icon-key\" style=\"margin-left:3px;\">" +
        "                                Passepartum" +
        "                            </a>"
    )

// inject passepartum icon
// document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")