const redisClient = require("./config/redis");

const createSession = async () => {

    const sessionId = "abc123";

    const sessionData = {
        userId: 1,
        role: "admin"
    };

    await redisClient.set(
        `session:${sessionId}`,
        JSON.stringify(sessionData),
        {
            EX: 3600
        }
    );

    console.log("Session created");
};


const getSession = async () => {

    const session = await redisClient.get(
        "session:abc123"
    );

    if (!session) {
        console.log("Session expired");
        return;
    }

    console.log(
        "Session:",
        JSON.parse(session)
    );
};


const logout = async () => {

    await redisClient.del("session:abc123");

    console.log("Logged out");
};


const run = async () => {

    await createSession();

    await getSession();

    await logout();
};

run();