const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('Frequency/Frequency');
}).get("/check", (request, response) => {
    var str1 = request.query.str1;

    if (str1 === null || str1 === "")
        response.send('<script>alert("Given string is empty !"); window.location.href = "/frequency"; </script>');

    var freq = {};
    for (var i = 0; i < str1.length; i++) {
        var character = str1.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    
    response.send('<script>alert("Frequency of letters : ' + Object.entries(freq) + '"); window.location.href = "/frequency"; </script>');
});

module.exports = router;