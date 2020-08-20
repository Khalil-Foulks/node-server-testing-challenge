const express = require('express');

//Router import here
const AnimalsRouter = require('./animals/animalsRouter');

//Global Middleware here
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
res.send(`<h2> Node Testing Project is UP! </h2>`)

})

server.use('/api/animals', AnimalsRouter);

module.exports = server;