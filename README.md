# fastify-boilerplate

Small simple Boilerplate for developing Websites or Webapps with,

* Web Framework - [Fastify](https://www.fastify.io/)
* Template Engine - [eta.js](https://eta.js.org/)
* Wrapper for Webpack - [Laravel-Mix](https://laravel-mix.com/)
* CSS Framework - [Plain UI](https://plain-ui.com/)

First step, copy the .env.example to .env and add your own values.

Install packages:

```
yarn install
```

Building CSS & JS:
```
yarn run build
or
yarn run build-production
```

Starting Server:
```
yarn run start
```

## Static & EtaHelper

All Static Files that are handle by Laravel Mix are copied to /static. You find
the webpack.mix.js in /packages/frontend. Fastify will handle all request for
static files by **/static/\<filename\>**. To handle files from manifest.json you
can use **asset(\<path\>)** in the templates.

```
<link href="{{ asset('/static/css/styles.css') }}" rel="stylesheet" type="text/css">
```