const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(__dirname + "/VisualAlignment.html");
});
 
module.exports = router;