This is a memcached cache plugin for [prerender](https://github.com/prerender/prerender).

## Usage

In your local prerender project run:

    $ npm install prerender-plugin-memcached --save

Then in the server.js that initializes the prerender:

    server.use(require('prerender-plugin-memcached')); 


By default it will connect to Memcached on localhost:11211 but if you set a MEMCACHED_SERVER environment variable it will connect to that server instead. Note that you *must* include the port in that server (i.e. '10.1.1.1:11211')

