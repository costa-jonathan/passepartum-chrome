document.getElementById("playPacman").addEventListener("click", function () {
    // Open the Pacman game in passepartum
    const url = "https://chrome.google.com/webstore/detail/pacman-popup/iocghaljaochhkgajdilelogdkejkiil";
    chrome.tabs.create({ url });
  });
  