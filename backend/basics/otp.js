const generateOtp = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000);

    await redisClient.set("otp:user:1", otp.toString(), {
        EX: 60
    });

    console.log("OTP:", otp);
};

generateOtp();