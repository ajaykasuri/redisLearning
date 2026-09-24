const redisClient = require("./config/redis");

const run = async () => {

    const transaction = redisClient.multi();

    transaction.set("balance", "1000");
    transaction.incrBy("loginCount", 1);
    transaction.set("status", "active");

    const result = await transaction.exec();

    console.log("Transaction result:", result);
};

run();