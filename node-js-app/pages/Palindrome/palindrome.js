const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/palindrome.html");
}).get("/checkPalindrome", (request, response) => {
    var str = request.query.str;
    var reverseStr = str.split('').reverse().join('');

    if(str === reverseStr){
        response.send("It's Palindrome !");
    }
    else{
        response.send("It's not Palindrome !!");
    }
});
 
module.exports = router;