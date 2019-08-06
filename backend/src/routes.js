const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ message: `Hi` })
});

routes.post('/devs', (req, res) => {
    console.log(req.body)
});

module.exports = routes;