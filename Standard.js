//sleep function
function sleep(millisecs) {
    const dateNow = Date.now();
    let currDate = null;
    do {
        currDate = Date.now();
    } while (currDate - dateNow < millisecs);
}

//program start
async function start() {

    //open new tab as soon as browser is opened
    const url = "https://www.moodle.tum.de/login/index.php";
    await window.open(url, '_blank').focus();
    console.log("Start");

}

//use async function to... click links/buttons in sequence
async function main() {

    // get the documents id
    const loginOne = document.getElementsByName("TUM LOGIN");
    await console.log(loginOne);
    //const loginOne = document.getElementsByName("TUM LOGIN");


}

//call start function
start();

main();
console.log("End");

//wait for very long time to prevent looping problem. How do we fix this looping problem?
sleep(1000000);

//let's silver-trian run on startup
/* "background": {
      "scripts": ["Standard.js"]
  }, */