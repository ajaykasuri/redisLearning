const redisClient = require("./config/redis");

const generateOtp = async () => {

    const otp = Math.floor(
        100000 + Math.random() * 900000
    );

    await redisClient.set(
        "otp:user:1",
        otp.toString(),
        {
            EX: 60
        }
    );

    console.log("OTP:", otp);
    console.log("OTP expires in 60 seconds");
};


const verifyOtp = async (enteredOtp) => {

    const storedOtp = await redisClient.get("otp:user:1");

    if (!storedOtp) {
        console.log("OTP expired");
        return;
    }

    if (storedOtp === enteredOtp) {

        await redisClient.del("otp:user:1");

        console.log("OTP verified");

    } else {

        console.log("Invalid OTP");
    }
};


const run = async () => {

    await generateOtp();

    // Example
    await verifyOtp("123456");
};

run();