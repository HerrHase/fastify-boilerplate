import fastify from 'fastify'
import dotenv from 'dotenv'
import path from 'path'

// getting .env
dotenv.config({ path: path.join(path.resolve(), '/../../.env') })

// create server
const server = fastify()

/**
 *  plugins
 *
 *
 */

import etaPlugin from './plugins/eta.js'
server.register(etaPlugin)

/**
 *  routing
 *
 *
 */

import indexHttp from './http/index.js'
import staticHttp from './http/static.js'

server
    .register(indexHttp)
    .register(staticHttp)

export default server