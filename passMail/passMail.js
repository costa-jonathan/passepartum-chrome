//When http://mail.tum.de* loads, enter details & click the sign in button

window.addEventListener('load', function() {
    try { // run try catch to get stored values & fill into browser
        chrome.storage.local.get('moodle_key', function(items) {
            if (!chrome.runtime.error && document.getElementsByClassName('form-error').length === 0) {
                document.getElementById('username').value = items.moodle_key.username
                document.getElementById('password').value = items.moodle_key.password
                    // wait a bit and then click the login button
                setTimeout(() => {
                    document.getElementsByClassName("signinTxt")[0].click();
                }, 500);
            }
        });
    } catch (err) {
        main().then() //main() non-existant bc clicking without saved fill-in not possible yet
    }


})