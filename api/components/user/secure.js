const auth = require('../../../auth');

module.exports = function checkAuth(action) {

    function middleware(req, res, next) {
        switch(action) {
            case 'update':
                // el usuario que se atenticará
                const owner = req.body.id;
                // check un objeto que tiene funciones
                auth.check.own(req, owner);
                next();
                break;

            default:
                next();
        }
    }

    return middleware;
}