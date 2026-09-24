const redisClient = require("./config/redis");

const checkRateLimit = async (userId) => {

    const key = `rate:user:${userId}`;

    const count = await redisClient.incr(key);

    if (count === 1) {
        await redisClient.expire(key, 60);
    }

    if (count > 5) {
        console.log("Too many requests");
        return false;
    }

    console.log("Request allowed:", count);

    return true;
};


const run = async () => {

    for (let i = 1; i <= 7; i++) {

        await checkRateLimit(1);
    }
};

run();