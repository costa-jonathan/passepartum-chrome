document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('moodle_key', function(items) {
        if (!chrome.runtime.error) {
            let user = items.moodle_key.username
            if (user) {
                document.getElementById('title').innerHTML =
                    'There are values stored for <b>' + user + '</b>. If you want to change enter the new login data:'
            }
        }
    })

    document.querySelector('submit').addEventListener('click', onclick, false)

    function onclick() {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        console.log(username, password)
        chrome.storage.sync.set({ 'moodle_key': { "username": username, "password": password } }, function() {
            if (chrome.runtime.error) {
                console.log("Error.");
            }
        });
    }

    // This whole paragraph of code was solved with one href
    // window.addEventListener('click', 
    // document.querySelector('login').addEventListener('click', onclick, false)

    // function onclick() {
    //     window.open("https://www.moodle.tum.de/login/index.php");

    //     document.getElementById("donotcache-dummy-label").click()
    //     chrome.storage.sync.get('moodle_key', function(items) {
    //         if (!chrome.runtime.error) {
    //             document.getElementById('username').value = items.moodle_key.username
    //             document.getElementById('password').value = items.moodle_key.password
    //         }
    //     });
    //     setTimeout(() => { document.getElementById("btnLogin").click() }, 1000);
    // }
})