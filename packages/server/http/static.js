import fastifyStatic from '@fastify/static'
import path from 'path'

/**
 *  static files that are send frontend package
 *
 *
 *  @author Björn Hase <me@herr-hase.wtf>
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://gitea.node001.net/HerrHase/super-fastify-directus.git
 *
 */

export default async function(fastify, opts) {

    /**
     *
     *
     */
    fastify.register(fastifyStatic, {
        root: path.join(path.resolve(), '/../../static'),
        prefix: '/static',
        preCompressed: true
    })
}