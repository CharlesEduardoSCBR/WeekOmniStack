const express = require('express');
const server = express();

const caracter = '!'

server.get('/', (req, res) => {
    return res.json({ message: `Hi ${caracter}` });
});

server.listen(3333);