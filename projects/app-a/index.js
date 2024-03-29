const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi from App A');
})

app.listen(8080, () => {
    console.log('App A is running on port 8080');
})