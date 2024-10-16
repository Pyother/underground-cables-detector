// * Main packages:
const path = require('path');
const express = require('express');

const createRoutes = (app) => {
    app.use(express.static(path.join(__dirname, '../../client/build')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/build/index.html'));
    });
}

module.exports = createRoutes;