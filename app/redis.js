var redis = require('redis');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

const configRedis = { 
    host: '172.28.1.4', 
    port: 6379, 
    ttl: 60*60*10 
}
var client = redis.createClient(configRedis);

var redisStore = new RedisStore({ 
        host: configRedis.host, 
        port: configRedis.port, 
        client: client, 
        ttl: configRedis.ttl
});

function getAllActiveSessions() {
    return new Promise((resolve, reject) => {
        redisStore.all(function(err, sessions) {
            if(err) reject(err);
            else resolve(sessions);
        });
    });
}

module.exports = { redisStore, getAllActiveSessions };