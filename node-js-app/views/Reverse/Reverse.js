const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('Reverse/Reverse');
}).get("/check", (request, response) => {
    var str1 = request.query.str1;

    if (str1 === null || str1 === "")
        response.send('<script>alert("Given string is empty !"); window.location.href = "/reverse"; </script>');

    let reversedStr = "";

    for (i = 0; i < str1.length; i++) {
        reversedStr = reversedStr + str1.substring(str1.length - i - 1, str1.length - i);
    }

    response.send('<script>alert("Reversed string is :' + reversedStr + '"); window.location.href = "/reverse"; </script>');
});

module.exports = router;