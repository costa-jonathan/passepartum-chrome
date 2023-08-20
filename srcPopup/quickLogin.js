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

    let redirectDict = {
        "www.science.org": "../passScience/passScience.js",
        "www.nature.com": "../passScience/passNature.js",
        "pubs.rsc.org": "../passScience/passRSC.js",
        "pubs.acs.org": "../passScience/passACS.js",
        "epubs.siam.org": "../passScience/passSiam.js",
        "www.springer.com": "../passScience/passSpringer.js",
        "link.springer.com": "../passScience/passSpringer.js",
        "pubsonline.informs.org": "../passScience/passPubsOnLine.js",
        "www.annualreviews.org": "../passScience/passAnualreviews.js",
        "onlinelibrary.wiley.com": "../passScience/passWiley.js"
    };

    function extractDomain(url) {
      const protocolEnd = url.indexOf("://");
      const domainStart = protocolEnd !== -1 ? protocolEnd + 3 : 0;
      const domainEnd = url.indexOf("/", domainStart);
      return domainEnd !== -1 ? url.substring(domainStart, domainEnd) : url.substring(domainStart);
    }


    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let domain = extractDomain(url)
        if (domain in redirectDict.keys()) {
            redirectDict[domain]
        }
    })
})




