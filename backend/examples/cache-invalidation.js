const redisClient = require("./config/redis");

const getUsers = async () => {

    const cachedUsers = await redisClient.get("users");

    if (cachedUsers) {
        console.log("Cache hit");

        return JSON.parse(cachedUsers);
    }

    console.log("Cache miss");

    // Normally this comes from MySQL
    const users = [
        { id: 1, name: "Ajay" },
        { id: 2, name: "Rahul" }
    ];

    await redisClient.set(
        "users",
        JSON.stringify(users),
        {
            EX: 60
        }
    );

    return users;
};


const updateUsers = async () => {

    // 1. Update MySQL
    console.log("Users updated in MySQL");

    // 2. Delete old cache
    await redisClient.del("users");

    console.log("Cache invalidated");
};


const run = async () => {

    await getUsers();

    await updateUsers();

    await getUsers();
};

run();