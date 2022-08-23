const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('ColorTransition/ColorTransition');
});

module.exports = router;