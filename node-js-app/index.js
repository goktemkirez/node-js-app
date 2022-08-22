const express = require("express");
const app = express();
const palindromeRoutes = require("./pages/Palindrome/Palindrome");
const anagramRoutes = require("./pages/Anagram/Anagram");
const rotationRoutes = require("./pages/Rotation/Rotation");
const reverseRoutes = require("./pages/Reverse/Reverse");
const frequencyRoutes = require("./pages/Frequency/Frequency");
const visualAlignmentRoutes = require("./pages/VisualAlignment/VisualAlignment");
app.use("/palindrome/", palindromeRoutes);
app.use("/anagram/", anagramRoutes);
app.use("/rotation/", rotationRoutes);
app.use("/reverse/", reverseRoutes);
app.use("/frequency/", frequencyRoutes);
app.use("/visual-alignment/", visualAlignmentRoutes);
 
app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log('App available on http://localhost:3000');
});