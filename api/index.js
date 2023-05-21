const express = require('express')

const config = require('../config.js')
const user = require('./components/user/network')

const app = express();
const port = config.api.port

// Router
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/user', user)

app.listen(port, ()=> {
    console.log(`API listen port: ${port}`);
})