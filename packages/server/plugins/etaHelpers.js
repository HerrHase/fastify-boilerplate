import path from 'path'
import * as fs from 'fs'

const basePath = path.join(path.resolve(), '/../../../')

/**
 *  asset - checks manifest.json for given path and return
 *  file path with id for cache busting
 *
 *
 *  @param {String} publicPath
 *
 */

function asset(staticPath)
{
    // getting basePath
    let result = staticPath

    // path to mix-manifest
    const file = basePath + 'mix-manifest.json'

    if (fs.existsSync(file)) {

        const manifest = fs.readFileSync(file)
        const files = JSON.parse(manifest)

        if (files[staticPath]) {
            result = files[staticPath]
        }
    }

    return result
}

export { asset }