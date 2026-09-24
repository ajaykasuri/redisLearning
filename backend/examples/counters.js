const redisClient = require("./config/redis");

const increaseViews = async () => {

    const views = await redisClient.incr("post:100:views");

    console.log("Views:", views);
};


const increaseLikes = async () => {

    const likes = await redisClient.incr("post:100:likes");

    console.log("Likes:", likes);
};


const run = async () => {

    await increaseViews();
    await increaseViews();
    await increaseViews();

    await increaseLikes();
};

run();