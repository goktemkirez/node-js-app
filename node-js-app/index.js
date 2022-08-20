const express = require("express");
const app = express();
const palindromeRoutes = require("./pages/Palindrome/palindrome");
// const contentRoutes = require("./content");
app.use("/palindrome/", palindromeRoutes);
// app.use("/", contentRoutes);
 
app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log('App available on http://localhost:3000');
});