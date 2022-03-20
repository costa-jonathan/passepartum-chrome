// this code runs when on https://login.tum.de/* which is the Shibboleth login for tum

window.addEventListener('load', function() {
    document.getElementById("donotcache-dummy-label").click() // click the "remember me" radio

    // first get stored username and password - if that fails run main which relies on chrome saved passwords
    try { // this try catch block doesn't work yet todo
        chrome.storage.sync.get('moodle_key', function(items) {
            if (!chrome.runtime.error && document.getElementsByClassName('form-error').length === 0) {
                document.getElementById('username').value = items.moodle_key.username
                document.getElementById('password').value = items.moodle_key.password
            }
        });
    } catch (err) {
        main().then() // async function but don't need then I guess
    }

    // wait a bit and then click the login button
    setTimeout(() => { document.getElementById("btnLogin").click() }, 1000);
})
