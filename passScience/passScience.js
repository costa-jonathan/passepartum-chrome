// Construct login URL with redirect to the current page
const url = encodeURIComponent(location.href.split('#')[0]);
const loginUrl = `http://iam.atypon.com/action/ssostart?idp=https%3A%2F%2Ftumidp.lrz.de%2Fidp%2Fshibboleth&redirectUri=${url}&targetSP=https%3A%2F%2Fwww.science.org&requesterId=https%3A%2F%2Fwww.science.org%2Fshibboleth`;

// Check if paper is available and the user is already logged in
const institutionNameElement = document.querySelector("#mainNavbar > div > div > div.col.justify-content-end.d-flex.p-0.header-row__item > ul > li:nth-child(1) > div > div > div.institution__content > span.institution__name");
const accessButton = document.querySelector("#frontmatter > header > div > div.info-panel > div.info-panel__right-items-wrapper > div.info-panel__formats.info-panel__item > a > span");

if (institutionNameElement && accessButton?.textContent === 'get access') {
  // User is already logged in but the paper is not available
  const loginButton = document.createElement('a');
  loginButton.href = "#";
  loginButton.title = "TUM";
  loginButton.style = "position: fixed; background: darkred; width: 2.5rem; height: 2.5rem; bottom: 2rem; left: 2rem; z-index: 130; border-radius: 4rem; box-shadow: 2px 4px 6px 1px rgba(0,0,0,0.5);";

  const logo = document.createElement('img');
  logo.src = chrome.runtime.getURL("icons/icons8-key-white.svg");
  logo.style = "max-width: 100%";
  logo.alt = "passepartum-logo";

  loginButton.appendChild(logo);
  loginButton.addEventListener('click', () => {
    alert('You are already logged in. This paper does not seem to be available for TUM staff.');
  });

  document.body.appendChild(loginButton);
} else {
  // User is not logged in yet, inject login button with constructed URL
  injectButton(loginUrl);
}
