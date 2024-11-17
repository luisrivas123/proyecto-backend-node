module.exports = {
  api: {
    port: process.env.API_PORT || 3000
  },
  post: {
    port: process.env.POST_PORT || 3002
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'Anthar3s?'
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    port: process.env.MYSQL_PORT || '3306',
    password: process.env.MYSQL_PASS || 'password',
    database: process.env.MYSQL_DB || 'mystore'
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001
  },
  cacheService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3003
  },
  redis: {
    host:
      process.env.REDIS_HOST ||
      'redis-14996.c239.us-east-1-2.ec2.redns.redis-cloud.com',
    port: process.env.REDIS_PORT || 14996,
    password: process.env.REDIS_PASSWORD || 'wufJhvNDIiCL3I4BLQzUsndqcQT2mHxR'
  }
}
