const TABLA = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(body) {
        const post = {
            id: body.id,
            user: body.user,
            text: body.text
        }

        return store.upsert(TABLA, post);
    }

    function getByUser(user) {
        return store.get(TABLA, user);
    }

    return {
        list,
        get,
        upsert,
        getByUser
    };
}