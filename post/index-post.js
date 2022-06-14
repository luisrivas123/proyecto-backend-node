const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config.js');
const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();

app.use(bodyParser.json());


// ROUTER
app.use('/api/post', post);

// middleware error
app.use(errors);

app.listen(config.post.port, () => {
    console.log('Api escuchando en el puerto ', config.post.port);
});