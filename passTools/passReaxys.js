// inject login button on the top of the page (without url; EventListener farther down)
document.querySelector('#site-navigation > ul')
    .insertAdjacentHTML('beforeend',
        '<li class="new-main-site-navigation-item"><a id="passepartum" ' +
        'class="new-menu-link"><img style="margin-top: -13px;" id=\'logo\' alt=\'passepartum-logo\' width=\'32\'></a></li>')

// inject passepartum icon
document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-blue.svg")

// add event listener to the button added that runs "pass" function when pressed
document.getElementById("passepartum").addEventListener("click", pass);


function pass() {
    // all the timeouts are relatively long to support slower internet
    // - maybe there is a better solution but i don't know any for now
    // press "sign in via your institution"
    document.getElementsByClassName('new-menu-link')[1].click()

    // open the dropdown menu to "Select your region or group"
    setTimeout(function() {
        document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.els-select-wrapper.dropdown > div > a > span').click()
    }, (3 * 1000));

    // loop through the options until 'German Higher Education & Research (DFN-AAI)' is found and click that
    setTimeout(function() {
        let i = 10 // just for speed reasons start at the 11th
        while (true) {
            let university = document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.els-select-wrapper.dropdown.open > div > ul > li:nth-child('+i+') > a > span').textContent
            if (university === 'German Higher Education & Research (DFN-AAI)') {
                break
            } else {
                i ++
            }
        }
        document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.els-select-wrapper.dropdown.open > div > ul > li:nth-child('+i+') > a').click()
    }, (3.5 * 1000));

    // open the dropdown menu to "Select your institution"
    setTimeout(function() {
        try { // if there was already a login before
            document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div:nth-child(8) > div > a > span').click()
        } catch (e) { // otherwise (just moved by one div child)
            document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div:nth-child(7) > div > a > span').click()
        }
    }, (5 * 1000));

    // loop through the dropdown and select TUM
    setTimeout(function() {
        let i = 10 // just for speed reasons start at the 11th
        while (true) {
            let university = document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.els-select-wrapper.dropdown.open > div > ul > li:nth-child('+i+') > a > span').textContent
            if (university === 'Technische Universität München (TUM)') {
                break
            } else {
                i ++
            }
        }
        document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.els-select-wrapper.dropdown.open > div > ul > li:nth-child('+i+') > a').click()
    }, (5.5 * 1000));

    // finally click the "go" button
    setTimeout(function() {
        document.querySelector('#main-content > div > div > div > div.login-page-form-wrapper > div.login-page-form-actions > div > button').click()
    }, (6 * 1000));
}