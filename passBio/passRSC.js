const url = 'https://www.rsc.org/rsc-id/account/checkfederatedaccess?instituteurl=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&returnurl=' + location.href.replace('/', '%2F').replace(':', '%3A')

setTimeout(function() {
    document.querySelector("#DownloadOption > div")
        .insertAdjacentHTML('beforeend', "<a href=\"" + url + "\" class=\"btn btn--cta btn--primary btn--block btn--stack \" style='height: 80px'>\n" +
            "                Passepartum\n" +
            "<img id='logo' alt='passepartum-logo' width='60' height='60' style=\"margin-top: -32px;margin-left: 89%\">" +
            "                <span class=\"btn-info\" style='margin-top: -35px'>Acces via TUM</span>\n" +
            "            </a>");

    document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")
}, (1 * 1000));





