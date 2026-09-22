const redisClient = require("./config/redis");

redisClient.set("otp", "123456", {
    EX: 60
})
.then(() => {
    console.log("OTP stored successfully");

    return redisClient.ttl("otp");
})
.then((res) => {
    console.log("TTL:", res);
})
.catch((err) => {
    console.log("Error:", err);
});