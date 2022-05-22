//When http://campus.tum.de* loads, enter details & click the sign in button
// type = "text/javascript";
// src = "/test/wp-content/themes/child/script/jquery.jcarousel.min.js";

window.addEventListener('load', function() {
    try { // run try catch to get stored values & fill into browser
        setTimeout(() => {
            chrome.storage.local.get('moodle_key', function(items) {
                if (!chrome.runtime.error && document.getElementsByClassName('form-error').length === 0) {
                    var obj = 'id_brm-pm-dtop_login_uname_input';

                    function toggle(obj) {
                        var item = document.getElementById(obj);
                        // if (item.style.visibility == 'visible') { item.style.visibility = 'hidden'; } else
                        item.style.visibility = 'visible';
                    }
                    // console.log(items.moodle_key.username);
                    // var usn = document.getElementById('id_brm-pm-dtop_login_uname_input');
                    // usn.click();

                    // document.getElementById('id_brm-pm-dtop_login_uname_input').value = "";
                    // var inputVal = "";
                    // if (usn) {
                    //     inputVal = usn.value;
                    //     usn.value = items.moodle_key.username;
                    // }
                    // var e = jQuery.Event("keydown", { keyCode: 20 });

                    // console.log(items.moodle_key.username.slice(0, 2));
                    //usn.setAttribute('value', items.moodle_key.username);

                    // var pwd = document.getElementById('id_brm-pm-dtop_login_pw_input');
                    //pwd.click();

                    // console.log();
                    // pwd.value = items.moodle_key.password;
                    // document.getElementById('id_brm-pm-dtop_login_pw_input').value = items.moodle_key.password

                    // $('id_brm-pm-dtop_login_uname_input').trigger(e);

                    // wait a bit and then click the login button
                    setTimeout(() => {
                        document.getElementById("id_brm-pm-dtop_login_submitbutton").click();
                        console.log("Clicked");
                    }, 1500);
                }
            });
        }, 1500);
    } catch (err) {
        main().then() //main() non-existant bc clicking without saved fill-in not possible yet
    }


})