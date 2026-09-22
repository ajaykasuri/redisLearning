const redis=require('redis')
const redisClient=redis.createClient({
 url: process.env.REDIS_URL
})
redisClient.on("error",(err)=>{
console.log("Redis Error:", err);
})
redisClient.connect()
 .then(() => {
    console.log("Redis connected successfully");
  })
  .catch((err) => {
    console.log("Redis connection failed:", err);
  });

module.exports=redisClient

//createClient() creates a connection object that Node.js will use to
//communicate with the Redis server.
//.on() mean?It's an event listener.