/**
 *  notfound
 *
 *  @author Björn Hase <me@herr-hase.wtf>
 *  @license http://opensource.org/licenses/MIT The MIT License
 *  @link https://gitea.node001.net/HerrHase/super-fastify-directus.git
 *
 */

export default async function(fastify, opts) {

    /**
     *  if found nothing
     *
     *  @param  {object} request
     *  @param  {object} response
     *
     */
    fastify.get('/404', async function(request, response) {
        return response.view('../views/404')
    })

}