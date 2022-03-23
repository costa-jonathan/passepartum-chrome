document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.delete').addEventListener('click', onclick, false)
    function onclick () {
        let username = ''
        let password = ''
        console.log(username, password)
        chrome.storage.sync.set({'moodle_key' : {"username": username, "password": password}}, function(){
            if(chrome.runtime.error){
                console.log("Error.");
            }
        });
        location.reload() // reloading so you can see a successful input
    }
})


