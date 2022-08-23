const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path')

const palindromeRoutes = require("./views/Palindrome/Palindrome");
const anagramRoutes = require("./views/Anagram/Anagram");
const rotationRoutes = require("./views/Rotation/Rotation");
const reverseRoutes = require("./views/Reverse/Reverse");
const frequencyRoutes = require("./views/Frequency/Frequency");
const randomStringRoutes = require("./views/RandomString/RandomString");
const visualAlignmentRoutes = require("./views/VisualAlignment/VisualAlignment");
const titleCaseRoutes = require("./views/TitleCase/TitleCase");
const colorTransitionRoutes = require("./views/ColorTransition/ColorTransition");
const intersectionRoutes = require("./views/Intersection/Intersection");
app.use("/palindrome/", palindromeRoutes);
app.use("/anagram/", anagramRoutes);
app.use("/rotation/", rotationRoutes);
app.use("/reverse/", reverseRoutes);
app.use("/frequency/", frequencyRoutes);
app.use("/random-string/", randomStringRoutes);
app.use("/visual-alignment/", visualAlignmentRoutes);
app.use("/title-case/", titleCaseRoutes);
app.use("/color-transition/", colorTransitionRoutes);
app.use("/intersection/", intersectionRoutes);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(3000, () => {
    console.log('App available on http://localhost:3000');
});