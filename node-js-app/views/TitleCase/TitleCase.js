const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('TitleCase/TitleCase');
}).get("/check", (request, response) => {
    var str1 = request.query.str1;

    if (str1 === null || str1 === "")
        response.send('<script>alert("Given string is empty !"); window.location.href = "/title-case"; </script>');

    var ignore = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "nor", "on", "of", "off", "or", "out", "over", "the", "to", "vs"];
    
    let title = str1.split(' ').map(
        function (s) {
            if(ignore.includes(s.toLowerCase()))
                return s.toLowerCase();
            return s[0].toUpperCase() + s.substring(1).toLowerCase()
        }).join(' ');

    response.send('<script>alert("Transformed Title : ' + title + '"); window.location.href = "/title-case"; </script>');
});

module.exports = router;