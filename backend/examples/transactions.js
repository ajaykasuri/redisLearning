const redisClient = require("./config/redis");

const run = async () => {

    const result = await redisClient
        .multi()
        .set("user:name", "Ajay")
        .set("user:city", "Hyderabad")
        .set("user:age", "26")
        .exec();

    console.log(result);
};

run();