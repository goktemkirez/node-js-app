const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('Rotation/Rotation');
}).get("/check", (request, response) => {
    var str1 = request.query.str1;
    var str2 = request.query.str2;

    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 !== len2) {
        response.send('<script>alert("Text lengths are different !"); window.location.href = "/rotation"; </script>');
        return
    }

    let rotation = false;

    for(i = 0; i < len1; i++){
        let str1Temp = str1.substring(1, str1.length) +
              str1.substring(0, 1);
        if(str1Temp === str2){
            rotation = true;
        }
    }

    if (rotation === true) {
        response.send('<script>alert("Second text is a rotation of first one"); window.location.href = "/rotation"; </script>');
    } else {
        response.send('<script>alert("These are not rotation strings !"); window.location.href = "/rotation"; </script>');
    }
});

module.exports = router;