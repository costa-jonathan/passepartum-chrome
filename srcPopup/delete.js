document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.delete').addEventListener('click', onclick, false)
    function onclick () {
        let username = ''
        let password = ''
        console.log(username, password)
        chrome.storage.local.set({'moodle_key' : {"username": username, "password": password}}, function(){
            if(chrome.runtime.error){
                console.error("An error with local storage was found. If this precists please contact us.");
            }
        });
        location.reload() // reloading so one can see a successful input
    }
})


