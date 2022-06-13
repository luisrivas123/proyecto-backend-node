module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'YVW07oHYjp',
        password: process.env.MYSQL_PASS || 'JKfgZ66Y3P',
        database: process.env.MYSQL_DB || 'YVW07oHYjp',
    },
    mysqlService: {
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
}