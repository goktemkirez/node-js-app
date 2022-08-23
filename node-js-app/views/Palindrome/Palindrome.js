const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('Palindrome/Palindrome');
}).get("/check", (request, response) => {
    let _str = request.query.str;
    let str = _str.replace(/\,/g, "").replace(/\./g, "").replace(/\ /g, "");
    //reverse ve === dışında bir çözüm eklencek
    var reverseStr = str.split('').reverse().join('');

    if(str === reverseStr){
        response.send('<script>alert("It is Palindrome"); window.location.href = "/palindrome"; </script>');
    }
    else{
        response.send('<script>alert("It is NOT Palindrome"); window.location.href = "/palindrome"; </script>');
    }
});
 
module.exports = router;