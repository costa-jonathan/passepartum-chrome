try {
  // Passes the moodle.tum.de/login/index page if already logged in
  const arrowIcon = document.getElementsByClassName("icon-arrow-right")[0];
  arrowIcon.addEventListener("click", function () {
    // Add your click event handling logic here
  });
  arrowIcon.click();
} catch (e) {
  // Passes the moodle.tum.de welcome page
  console.error("Error: " + e.message);
}
