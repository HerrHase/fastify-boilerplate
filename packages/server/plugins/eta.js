import * as Eta from 'eta'
import view from '@fastify/view'
import fastifyPlugin from 'fastify-plugin'

import path from 'path'
import { asset } from './etaHelpers.js'

function etaPlugin(fastify, options, next) {
    fastify.register(view, {
        engine: {
            eta: Eta
        },

        root: path.join(path.resolve(), '/../frontend/views'),
        extname: '.eta',

        // adding function to templates
        defaultContext: {
            asset: asset
        },

        options: {
            tags: [ '{{', '}}' ],
            includeViewExtension: true,
            parse: {
                exec: "#",
                interpolate: "",
                raw: "!"
            },
            useWith: true,
            async: true
        }
    })

    next()
}

export default fastifyPlugin(etaPlugin, {
    fastify: '4.x',
    name: 'etaPlugin'
})