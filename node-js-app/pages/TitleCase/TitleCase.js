const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/TitleCase.html");
}).get("/check", (request, response) => {
    var str1 = request.query.str1;

    if (str1 === null || str1 === "")
        response.send("Given string is empty !")

    var ignore = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "nor", "on", "of", "off", "or", "out", "over", "the", "to", "vs"];
    
    let title = str1.split(' ').map(
        function (s) {
            if(ignore.includes(s.toLowerCase()))
                return s.toLowerCase();
            return s[0].toUpperCase() + s.substring(1).toLowerCase()
        }).join(' ');

    response.send("Reversed string is : " + title);
});

module.exports = router;