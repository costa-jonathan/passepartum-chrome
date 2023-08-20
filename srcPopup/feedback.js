document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.feedback').addEventListener('click', onclick, false)
    function onclick () {
        document.getElementById('body').innerHTML = "chrome.storage.cpu" + chrome.system.cpu + "chrome.storage.memory" + chrome.system.memory
            '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScMDrXN8wgb6IECqNw5Yrw0rx8cgUK_ZSNhuw--b1kTVznNfg' +
            '/viewform?embedded=true" width="640" height="597">Loading…</iframe>'
    }
})
