const cors = require('cors');
const express = require('express');
const path = require('path'); // 👈 FALTA ESTO
const routes = require('../routes');

const server = express();

server.use(cors());
server.options('*', cors());

server.use(express.json());

// 👇 ESTO ES LO QUE TE FALTABA
server.use(express.static(path.join(__dirname, '../frontend')));

server.use('/api', routes);

module.exports = server;