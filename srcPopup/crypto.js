//Download CryptoJS library 

//Link core.js & sha-256.js into the popup.html using script tags

//SHA 
// Hash a message using SHA-256
var username = "a.rubombora@tum.de"
var hash = CryptoJS.SHA256(username).toString();
console.log(hash); // 'Example' Output: "185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969"