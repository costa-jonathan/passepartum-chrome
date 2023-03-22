document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#requestPage').addEventListener('click', onclick, false)
    function onclick () {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        navigator.clipboard.writeText(url)
        console.log(url)
        document.getElementById('body').innerHTML =
        '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_e-KK-NUSXlmrxIBpxWMrIXXol4lZfFGjUDXg8gYSiV1dOg/viewform?embedded=true" width="640" height="499">Loading…</iframe>'
    });
    }
})
