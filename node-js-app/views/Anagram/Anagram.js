const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('Anagram/Anagram');
}).get("/check", (request, response) => {
    var str1 = request.query.str1;
    var str2 = request.query.str2;

    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 !== len2) {
        response.send('<script>alert("Text lengths are different !"); window.location.href = "/anagram"; </script>');
        return
    }
    //sort ve === dışında bir çözüm eklencek
    let checkStr1 = str1.split('').sort().join('');
    let checkStr2 = str2.split('').sort().join('');
    if (checkStr1 === checkStr2) {
        response.send('<script>alert("It is Anagram"); window.location.href = "/anagram"; </script>');
    } else {
        response.send('<script>alert("It is NOT Anagram"); window.location.href = "/anagram"; </script>');
    }
});

module.exports = router;