document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://campus.tum.de/*", true, async, items.moodle_key.username, items.moodle_key.password); //Mention your database query file here
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4) {
            varxhrjson = JSON.parse(xhr.responseText);
            /* Replace the below mentioned field id's with that of your form */
            // chrome.tabs.executeScript(null, { code: "document.getElementById('ap_customer_name').value = '" + varxhrjson['items.moodle_key.username'] + "'" });

            chrome.tabs.executeScript(null, { code: "document.getElementById('id_brm-pm-dtop_login_uname_input').value = '" + varxhrjson[items.moodle_key.username] + "'" });
            alert("Attemtped login");
            // chrome.tabs.executeScript(null, { code: "document.getElementById('ap_email').value = '" + varxhrjson['cmail'] + "'" });

            // chrome.tabs.executeScript(null, { code: "document.getElementById('ap_password').value = '" + varxhrjson['cpassword'] + "'" });

            // chrome.tabs.executeScript(null, { code: "document.getElementById('ap_password_check').value = '" + varxhrjson['cpassword'] + "'" });
        }
    }
    xhr.send();
});