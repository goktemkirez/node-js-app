const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/Anagram.html");
}).get("/check", (request, response) => {
    var str1 = request.query.str1;
    var str2 = request.query.str2;

    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 !== len2) {
        response.send('Text lengths are different !');
        return
    }
    //sort ve === dışında bir çözüm eklencek
    let checkStr1 = str1.split('').sort().join('');
    let checkStr2 = str2.split('').sort().join('');
    if (checkStr1 === checkStr2) {
        response.send("It's Anagram.");
    } else {
        response.send("It's not Anagram !!");
    }
});

module.exports = router;