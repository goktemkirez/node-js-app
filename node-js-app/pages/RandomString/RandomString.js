const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/RandomString.html");
}).get("/check", (request, response) => {
    var length = request.query.length;
    var content = request.query.content;

    if (length === null || length === 0)
        response.send("Given length is empty !")

    var characters = '';
    switch(content){
        case "onlyAlpha":
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            break;
        case "onlyNumeric":
            characters = '0123456789';
            break;
        case "both":
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            break;
    }
    var result = '';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }

    response.send("Random String : " + result);
});

module.exports = router;