// Background script runs when the extension is installed or the browser starts.
// It will continue running as long as the extension is active.
console.log('Background script is running.');

// Function to perform actions when the popup is opened
function onPopupOpen() {
  console.log('Popup is opened! Do something here...');
}

// Listen for the browserAction.onClicked event (popup is opened)
chrome.browserAction.onClicked.addListener(onPopupOpen);