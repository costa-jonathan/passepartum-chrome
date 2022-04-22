document.querySelector('#site-navigation > ul')
    .insertAdjacentHTML('beforeend',
        '<li class="new-main-site-navigation-item"><a id="passepartum" ' +
        'class="new-menu-link"><img style="margin-top: -13px;" id=\'logo\' alt=\'passepartum-logo\' width=\'32\'></a></li>')
document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-schlussel-128.png")


document.getElementById("passepartum").addEventListener("click", pass);

function pass() {
    document.getElementsByClassName('new-menu-link')[1].click()

    setTimeout(function() {
        document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.els-select-wrapper.dropdown > div > a > span').click()
    }, (3 * 1000));
    setTimeout(function() {
        document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.els-select-wrapper.dropdown.open > div > ul > li:nth-child(15) > a').click()
    }, (3.5 * 1000));
    setTimeout(function() {
        try {
            document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div:nth-child(8) > div > a > span').click()
        } catch (e) {
            document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div:nth-child(7) > div > a > span').click()
        }
    }, (5 * 1000));
    // click on second dropdown & select TUM
    setTimeout(function() {
        document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.els-select-wrapper.dropdown.open > div > ul > li:nth-child(28) > a').click()
    }, (5.5 * 1000));
    setTimeout(function() {
        document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.login-page-form-actions > div > button').click()
    }, (6 * 1000));
}
