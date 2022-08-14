# fastify-boilerplate

Small simple Boilerplate for developing Websites or Webapps with,

* Web Framework - [Fastify](https://www.fastify.io/)
* Template Engine - [eta.js](https://eta.js.org/)
* Wrapper for Webpack - [Laravel-Mix](https://laravel-mix.com/)
* CSS Framework - [Plain UI](https://plain-ui.com/)

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

To handle files from manifest.json that are generated from Laravel-Mix, you can
use **asset()** in the templates.

```
<link href="{{ asset('/static/css/styles.css') }}" rel="stylesheet" type="text/css">
```