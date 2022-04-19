const express = require('express');
const app = express();


app.get('/books', (req, res, next) => {
    console.log('Fetching all books');
    res.send('Right Api')
})

app.get('/books/:name', (req, res, next) => {
    req.name = req.params.name
    res.send({
        "bookName": `${req.name}`
    })
})

module.exports = app;