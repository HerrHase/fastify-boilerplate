/**
 *  index
 *
 *  @author Björn Hase <me@herr-hase.wtf>
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://gitea.node001.net/HerrHase/super-fastify-directus.git
 *
 */

export default async function(fastify, opts) {

    /**
     *  handle single page
     *
     *  @param  {object} request
     *  @param  {object} response
     *
     */
    fastify.get('/', async function(request, response) {
        return response.view('../views/index')
    })

}