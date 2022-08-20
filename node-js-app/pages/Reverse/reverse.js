const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/reverse.html");
}).get("/check", (request, response) => {
    var str1 = request.query.str1;

    if (str1 === null || str1 === "")
        response.send("Given string is empty !")

    let reversedStr = "";

    for (i = 0; i < str1.length; i++) {
        reversedStr = reversedStr + str1.substring(str1.length - i - 1, str1.length - i);
    }

    response.send("Reversed string is : " + reversedStr);
});

module.exports = router;