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


Topic:sets

For Redis Sets, these are the main functions we should learn. Since you're learning step-by-step, I’d cover them in this order.


| Redis command | Node.js function | Purpose                                           |
| ------------- | ---------------- | ------------------------------------------------- |
| `SADD`        | `sAdd()`         | Add one or more members                           |
| `SMEMBERS`    | `sMembers()`     | Get all members                                   |
| `SISMEMBER`   | `sIsMember()`    | Check whether a member exists                     |
| `SCARD`       | `sCard()`        | Get number of members                             |
| `SREM`        | `sRem()`         | Remove one or more members                        |
| `SPOP`        | `sPop()`         | Remove and return random member(s)                |
| `SRANDMEMBER` | `sRandMember()`  | Get random member(s) without removing             |
| `SMOVE`       | `sMove()`        | Move a member from one Set to another             |
| `SUNION`      | `sUnion()`       | Combine members from multiple Sets                |
| `SINTER`      | `sInter()`       | Get common members between Sets                   |
| `SDIFF`       | `sDiff()`        | Get members that exist in one Set but not another |
| `SUNIONSTORE` | `sUnionStore()`  | Store union result in another Set                 |
| `SINTERSTORE` | `sInterStore()`  | Store intersection result                         |
| `SDIFFSTORE`  | `sDiffStore()`   | Store difference result                           |
