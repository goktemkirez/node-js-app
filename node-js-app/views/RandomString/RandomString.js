const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('RandomString/RandomString');
}).get("/check", (request, response) => {
    var length = request.query.length;
    var content = request.query.content;

    if (length === null || length === 0)
        response.send('<script>alert("Given string is empty !"); window.location.href = "/random-string"; </script>');

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

    response.send('<script>alert("Random String : ' + result + '"); window.location.href = "/random-string"; </script>');
});

module.exports = router;