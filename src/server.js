const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect(`mongodb+srv://omnistack8:omnistack8@cluster0-my0ee.mongodb.net/omnistack8?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})
server.use(cores());
server.use(express.json());
server.use(routes);

server.listen(3333);