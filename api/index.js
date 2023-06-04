const express = require('express')
const swaggerUi = require('swagger-ui-express')

const config = require('../config.js')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const errors = require('../network/errors')

const app = express()
app.use(express.json())

const swaggerDoc = require('./swagger.json');

const port = config.api.port


// Router
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(errors)

app.listen(port, ()=> {
    console.log(`API listen port: ${port}`)
})