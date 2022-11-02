function injectButton() {
    // check if PDF is opened
    let embed = document.querySelector("body > embed")
    if (!document.body.contains(embed)) {
        // inject login button with constructed url matching the login options of the page
        document.body.innerHTML += ("" +
            "<a href=\"" + url + "\" title=\"TUM Redirect\" style='position: fixed; background: #0065bd; width: 2.5rem; height: 2.5rem; bottom: 2rem; left: 2rem; z-index:130; border-radius: 4rem; box-shadow: 2px 4px 6px 1px rgba(0,0,0,0.5);'>" +
            "<img id='logo' style='max-width: 100%' alt='passepartum-logo'>" +
            "</a>"
        );

        // inject passepartum icon
        document.getElementById('logo').src = chrome.runtime.getURL("icons/icons8-key-white.svg")
    }
}