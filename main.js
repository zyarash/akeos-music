/*
 *  filename: main.js
 *  description: Main server entry point
 **/

/** System imports **/
const path = require('path')

/** External imports **/
const express = require('express')

/** Project imports **/
//-


const app = express()
const port = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/home.html'));
});

app.listen(port, () => {
    console.log(`Listetning on port ${port}`);
});
