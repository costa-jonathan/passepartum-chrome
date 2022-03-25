document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.feedback').addEventListener('click', onclick, false)
    function onclick () {
        document.getElementById('bod').innerHTML = '' +
            // '<h1>Please consider filling in the quick form below, alternatively </h1>' +
        '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScMDrXN8wgb6IECqNw5Yrw0rx8cgUK_ZSNhuw--b1kTVznNfg' +
            '/viewform?embedded=true" width="640" height="597">Loading…</iframe>'
    }
})
