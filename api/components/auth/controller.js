const auth = require('../../../auth');
const TABLA = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore;
    // comprueba las base de datos sino la define
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function login(username, password) {
        const data = await store.query(TABLA, { username: username });
        if (data.password === password) {
            // Generar token;
            return auth.sign(data);
        } else {
            throw new Error('Informacion invalida');
        }
    }

    function upsert(data) {
        // El id de los datos de autorización
        //son los mismos del usuario
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = data.password;
        }

        return store.upsert(TABLA, authData);
    }

    return {
        upsert,
        login
    };
};