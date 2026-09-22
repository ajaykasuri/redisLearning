const redisClient=require('./config/redis')

redisClient.set("username","ajay")
.then(()=>{
    console.log("Data stored successfully")
})
.catch((err)=>{
    console.log("Error while storing the data:",err)
})

// redisClient.get("username")
// .then((username)=>{
//     console.log("username:",username)
// })
// .catch((err)=>{
//     console.log("Error while getting the data:",err)
// })


// redisClient.del("username")
// .then((res)=>{
// if(res===1){
//     console.log("deleted successfully")
// }
// else{
//     console.log("didn't exist")
// }
// })
// .catch((err)=>{
//     console.log("Error while deleting the data:",err)
// })

redisClient.exists("username")
.then((res)=>{
if(res===1){
    console.log("exists")
}
else{
    console.log("didn't exist")
}
})
.catch((err)=>{
    console.log("Error while checking the data:",err)
})
