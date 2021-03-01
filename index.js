require('dotenv').config()
const redis = require('redis')

const subscriber = redis.createClient({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_AUTH,
})

subscriber.on("message", function(channel, message) {

  console.log("Subscriber received message in channel '" + channel + "': " + message);
});

subscriber.subscribe("STL");
