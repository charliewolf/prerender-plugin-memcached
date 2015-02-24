var cache_manager = require('cache-manager');
var memcachedStore = require('cache-manager-memcached');

module.exports = {
    init: function(){
        this.cache = cache_manager.caching({
            store: memcachedStore, ttl: process.env.CACHE_TTL || 60, servers: [process.env.MEMCACHED_SERVER||'localhost:11211']
        });
    },

    beforePhantomRequest: function(req, res, next) {
        this.cache.get(req.prerender.url, function (err, result) {
            if (!err && result) {
                res.send(200, result);
            } else {
                next();
            }
        });
    },

    afterPhantomRequest: function(req, res, next) {
        this.cache.set(req.prerender.url, req.prerender.documentHTML);
        next();
    }
}

