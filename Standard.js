//program start

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

async function start() {

    //open new tab as soon as browser is opened
    const url = "https://www.moodle.tum.de/login/index.php";
    await window.open(url, '_blank').focus();
    console.log("Start");

}

//use async function to... click links in sequence

async function main() {

    // get the documents id
    const loginOne = document.getElementsByName("TUM LOGIN");
    await console.log(loginOne);
    //const loginOne = document.getElementsByName("TUM LOGIN");


}

//call start function
start();
sleep(10000);

main();
console.log("End");

//let's silver-trian run on startup
//JSON shyt because JSON is wack & doesn't allow for comments
/* "background": {
      "scripts": ["Standard.js"]
  }, */