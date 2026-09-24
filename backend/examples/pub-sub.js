const redis = require("redis");

const publisher = redis.createClient({
    url: process.env.REDIS_URL
});

const subscriber = redis.createClient({
    url: process.env.REDIS_URL
});


const run = async () => {

    await publisher.connect();
    await subscriber.connect();

    await subscriber.subscribe(
        "notifications",
        (message) => {

            console.log(
                "Received message:",
                message
            );
        }
    );

    await publisher.publish(
        "notifications",
        "New order received"
    );
};


run();