import server from './bootstrap.js'

// let it rain
const start = async () => {
    try {

        await server.listen({
            port: process.env.APP_PORT
        })

        console.log('Server started! Run on Port ' + process.env.APP_PORT)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()