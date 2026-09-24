const redisClient = require('../config/redis');
const JsonUsers=
[
  {
    "id": 1,
    "name": "Ajay",
    "age": 26,
    "city": "Hyderabad"
  },
  {
    "id": 2,
    "name": "Rahul",
    "age": 25,
    "city": "Bangalore"
  },
  {
    "id": 3,
    "name": "Priya",
    "age": 24,
    "city": "Chennai"
  }
]
const getUsers=async()=>{
try {
 const users = await redisClient.get("users")

    if(users){//Data exists → returns the stored value not an array
        console.log("Cache hit")
        const userData=JSON.parse(users)
    }
    else{
         await redisClient.set("users",JSON.stringify(JsonUsers),{
            EX:60
         })
         const ttl= await redisClient.ttl("users")
         console.log(ttl)
        
    }
} catch (error) {
    console.log("error while fetching users")
}
}
getUsers()

// const users=
// [
//   {
//     "id": 1,
//     "name": "Ajay",
//     "age": 26,
//     "city": "Hyderabad"
//   },
//   {
//     "id": 2,
//     "name": "Rahul",
//     "age": 25,
//     "city": "Bangalore"
//   },
//   {
//     "id": 3,
//     "name": "Priya",
//     "age": 24,
//     "city": "Chennai"
//   }
// ]

// const addUsers=async()=>{
//     try {
//         await redisClient.set("users",JSON.stringify(users))
//     } catch (error) {
//          console.log("error while adding users")
//     }
// }

// addUsers()


const updateUsers = async () => {
    try {
        // update logic of SQL

        await redisClient.del("users");

        console.log("Users updated and cache invalidated");
    } catch (err) {
        console.log(err);
    }
};