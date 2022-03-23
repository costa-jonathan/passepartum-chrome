if (window.location.href.indexOf("login") > -1) {
    window.onload = function () {
        setTimeout(() => {
            chrome.storage.sync.get('moodle_key', function(items){
            if(!chrome.runtime.error){
                document.getElementById('id_brm-pm-dtop_login_uname_input').value = items.moodle_key.username
                document.getElementById('id_brm-pm-dtop_login_pw_input').value = items.moodle_key.password
                document.getElementsByName('loginForm')[0].className= "ng-touched ng-dirty ng-valid"
                document.getElementById('id_brm-pm-dtop_login_uname_input').className = "username ng-pristine ng-touched ng-valid"
                document.getElementById('id_brm-pm-dtop_login_pw_input').className = "password ng-pristine ng-touched ng-valid"
            }
            setTimeout(() => {
                document.getElementById('id_brm-pm-dtop_login_submitbutton').disabled = false
                document.getElementById('id_brm-pm-dtop_login_submitbutton').click()
            }, 1000)
        });
        }, 4000)

    }
}
