const redisClient=require('../config/redis')

redisClient.hSet("user:2", {
  name: "ajay",
  age: "26",
  city: "hyderabad"
})
.then(()=>{
    console.log("data stored successfully...")
})
.catch((err)=>{
console.log("error while storing hset data:",err)
})


redisClient.hGet("user:2","age")
.then((res)=>{
    console.log("user data:",res)
})
.catch((err)=>{
    console.log("erro while fetching user data:",err)
})


redisClient.hGetAll("user:2")
.then((res)=>{
    console.log("user data:",res)
})
.catch((err)=>{
    console.log("erro while fetching user data:",err)
})


{/* async/await*/}

{/* 
async function getUser() {
  try {
    const user = await redisClient.hGetAll("user:2");

    console.log("User:", user);
  } catch (err) {
    console.log("Error while fetching user:", err);
  }
}

getUser();
    */}



    {
/*
hSet -->To store the data,
hGet -->To get individual data here we need to pass an argument
hGetAll-->To get all the stored data

we cannot directly store this JavaScript array/object using hSet() as if it were a normal JS object.

Common approach: JSON.stringify()
Convert the JavaScript data into a string:

await redisClient.set("users", JSON.stringify(users));

Then when you retrieve it:
const data = await redisClient.get("users");
const users = JSON.parse(data);
*/

    }