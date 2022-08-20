const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/frequency.html");
}).get("/check", (request, response) => {
    var str1 = request.query.str1;

    if (str1 === null || str1 === "")
        response.send("Given string is empty !")

    var freq = {};
    for (var i = 0; i < str1.length; i++) {
        var character = str1.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    response.send("Frequency of letters : " + Object.entries(freq));
});

module.exports = router;