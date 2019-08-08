const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://CharlesEdu:re.pe_5c@cluster0-3wpcc.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);