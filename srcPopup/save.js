document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get('moodle_key', function(items){
    if(!chrome.runtime.error){
        let user = items.moodle_key.username
        if (user) {
            document.getElementById('title').innerHTML =
                'There is login information stored for <b>' + user + '</b>. ' +
                'If you want to change it simply enter the new login data.'
        }
    }
    })

    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick () {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        console.log(username, password)
        chrome.storage.sync.set({'moodle_key' : {"username": username, "password": password}}, function(){
            if(chrome.runtime.error){
                console.log("Error.");
            }
        });
        location.reload() // reloading so you can see a successful input
    }
})


