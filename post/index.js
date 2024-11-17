const express = require('express')

const config = require('../config.js')
const post = require('./components/post/network')
const errors = require('../network/errors')

const app = express()
app.use(express.json())

const port = config.post.port

// Router
app.use('/api/post', post)

app.use(errors)

app.listen(port, () => {
  console.log(`Servicio Post: ${port}`)
})
