try { // passes the moodle.tum.de/login/index page if already logged in
    document.getElementsByClassName("icon-arrow-right")[0].click();
} catch (e) { // passes the moodle.tum.de welcome page
    console.log("Error: " + e.message);
}