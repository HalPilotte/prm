const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage.
app.get('/index.html', (req, res) => {res.send(console.log("hello world"))});