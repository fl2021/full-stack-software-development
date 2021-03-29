const express = require('express');
const app = express();
app.listen(3000, function() {
console.log("Server started on port 3000");
});
app.get('/', (req, res) => {
        res.send("hello, world");
});

app.get('/contact', (req,res) => {
    res.send("my email is: fan@gmail.com")
});
app.get('/about', (req,res) => {
    res.send("ml.com")
});
app.get('/newsfeed', (req,res) => {
    res.send("mfafdasl.com")
});
//callback function

