const express = require('express');
const cors = require('cors');

const applyMiddleware = (app) => {
    app.use(cors({
        origin: [ 'http://localhost:5173',
        'https://clever-fenglisu-a864e4.netlify.app'
        ],
        credentials: true
    }));
    app.use(express.json());
}

module.exports = applyMiddleware;