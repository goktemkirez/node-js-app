const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/Palindrome.html");
}).get("/check", (request, response) => {
    let _str = request.query.str;
    let str = _str.replace(/\,/g, "").replace(/\./g, "").replace(/\ /g, "");
    //reverse ve === dışında bir çözüm eklencek
    var reverseStr = str.split('').reverse().join('');

    if(str === reverseStr){
        response.send("It's Palindrome !");
    }
    else{
        response.send("It's not Palindrome !!");
    }
});
 
module.exports = router;