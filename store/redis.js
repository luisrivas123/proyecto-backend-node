const redis = require('redis')

const config = require('../config')

// const client = redis.createClient({
//   host: config.redis.host,
//   port: config.redis.port,
//   password: config.redis.password
// })

const client = redis.createClient({
  // host: config.cacheService.dbHost,
  // port: config.cacheService.dbPort,
  // password: config.cacheService.dbPass
  url: `redis://default:${config.redis.password}@${config.redis.host}:${config.redis.port}`
})

;(async () => {
  await client.connect()
  console.log('Conectado a REDIS')
})()

async function list(table) {
  const value = await client.get(table)
  return JSON.parse(value)
  // return new Promise((resolve, reject) => {
  //   client.get(table, (err, data) => {
  //     if (err) return reject(err)

  //     let res = data || null
  //     if (data) {
  //       res = JSON.stringify(data)
  //     }
  //     resolve(res)
  //   })
  // })
}
async function get(table, id) {
  const value = await client.get(`${table}_${id}`)
  return JSON.parse(value)
}
async function upsert(table, data) {
  // let key = table
  // if (data && data.id) {
  //   key = key + '_' + data.id
  // }

  // client.setEx(key, 10, JSON.stringify(data))
  // return true
  let key = table
  if (data && data.id) {
    key += '_' + data.id
  }
  await client.set(key, JSON.stringify(data))
  return true
}

// const client = redis.createClient({
//   // host: config.cacheService.dbHost,
//   // port: config.cacheService.dbPort,
//   // password: config.cacheService.dbPass
//   url: `redis://default:${config.redis.password}@${config.redis.host}:${config.redis.port}`
// })

// ;(async () => {
//   await client.connect()
//   console.log('Conectado a REDIS')
// })()

// export default {
//   async list(table) {
//     const value = await client.get(table)
//     return JSON.parse(value)
//   },

//   async get(table, id) {
//     const value = await client.get(`${table}_${id}`)
//     return JSON.parse(value)
//   },

//   async upsert(table, data) {
//     let key = table
//     if (data && data.id) {
//       key += '_' + data.id
//     }
//     await client.set(key, JSON.stringify(data))
//     return true
//   }
// }

module.exports = {
  list,
  get,
  upsert
}
