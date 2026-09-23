sudo service redis-server restart      --> to start the ubuntu.
[sudo: authenticate] Password:         -->it will ask for an password enter the password.
  redis-cli ping                       --> to test wether its running or not
PONG                                   -->it will give res 
 

Redis:

Topic:Hasesh

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



Topic: Redis Lists.
A Redis List is an ordered collection of values.

Think of a JavaScript array:
Redis List:

tasks
 ↓
[ task1, task2, task3 ]

Lists are useful for things like:

*queues
*recent activity
*notifications
*jobs waiting to be processed

Main commands:
| Redis    | Node.js    | Purpose               |
| -------- | ---------- | --------------------- |
| `LPUSH`  | `lPush()`  | Add to beginning      |
| `RPUSH`  | `rPush()`  | Add to end            |
| `LPOP`   | `lPop()`   | Remove from beginning |
| `RPOP`   | `rPop()`   | Remove from end       |
| `LRANGE` | `lRange()` | Get elements          |
| `LLEN`   | `lLen()`   | Get list length       |
