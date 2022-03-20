// just passes the moodle welcome page
try {
    document.getElementsByClassName("icon-arrow-right")[0].click()
} catch (error) {
    document.getElementsByClassName('btn btn-secondary')[0].click();
}
