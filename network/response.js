exports.success = function (req, res, message, status){
    let statusCode = status || 200
    let statusMessaje = message || ''

    res.status(status).send({
        error: false,
        status: status,
        body: statusMessaje,
    })
}

exports.erro = function (req, res, message, status){
    let statusCode = status || 500
    let statusMessaje = message || 'Interanl server error'

    res.status(statusCode).send({
        error: false,
        status: status,
        body: statusMessaje,
    })
}