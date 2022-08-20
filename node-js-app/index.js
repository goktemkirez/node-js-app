const express = require("express");
const app = express();
const palindromeRoutes = require("./pages/Palindrome/palindrome");
const anagramRoutes = require("./pages/Anagram/anagram");
const rotationRoutes = require("./pages/Rotation/rotation");
const reverseRoutes = require("./pages/Reverse/reverse");
app.use("/palindrome/", palindromeRoutes);
app.use("/anagram/", anagramRoutes);
app.use("/rotation/", rotationRoutes);
app.use("/reverse/", reverseRoutes);
 
app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log('App available on http://localhost:3000');
});