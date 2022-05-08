//When http://mail.tum.de* loads, enter details & click the sign in button

window.addEventListener('load', function() {
    // first get stored username and password - if that fails run main which relies on chrome saved passwords
    try { // run try catch to get stored values & fill into browser
        chrome.storage.local.get('moodle_key', function(items) {
            if (!chrome.runtime.error && !document.getElementById('signInErrorDiv')) {
                document.getElementById('username').value = items.moodle_key.username
                document.getElementById('password').value = items.moodle_key.password
                document.getElementsByClassName("signinbutton")[0].click()
            }
        });
    } catch (err) {
        main().then() //main() non-existant bc clicking without saved fill-in not possible yet
    }
})