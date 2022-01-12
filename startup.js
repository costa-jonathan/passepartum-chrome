function start() {

    if (typeof window !== "undefined") {
        // browser code    
        //open new tab as soon as browser is opened
        const url = "https://www.moodle.tum.de/login/index.php";
        window.open(url, '_blank').focus();
        console.log("Moodle openning");
    }
}

start()