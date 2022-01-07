window.addEventListener('load', function () {
    document.getElementById("donotcache-dummy-label").click()
    chrome.storage.sync.get('moodle_key', function(items){
        if(!chrome.runtime.error){
            document.getElementById('username').value = items.moodle_key.username
            document.getElementById('password').value = items.moodle_key.password
        }
    });
    setTimeout(() => {document.getElementById("btnLogin").click()}, 1000);
})