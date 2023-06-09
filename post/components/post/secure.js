const auth = require('../../../auth');

module.exports = function checkAuth(action) {

    function middleware(req, res, next) {
        switch(action) {
            case 'update':
                // el usuario que se atenticará
                const owner = req.body.user;
                // check un objeto que tiene funciones
                auth.check.own(req, owner);
                next();
                break;
            
            case 'follow':
                auth.check.logged(req);
                next();
                break;

            default:
                next();
        }
    }

    return middleware;
}