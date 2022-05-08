// very similar to the loginShibboleth.js login process

window.addEventListener('load', function() {
    // first get stored username and password - if that fails run main which relies on chrome saved passwords
    try {
        chrome.storage.local.get('moodle_key', function(items) {
            if (!chrome.runtime.error && !document.getElementById('signInErrorDiv')) {
                document.getElementById('username').value = items.moodle_key.username
                document.getElementById('password').value = items.moodle_key.password
                document.getElementsByClassName("signinbutton")[0].click()
            }
        });
    } catch (err) {
        main().then() // async function but don't need then I guess
    }
})