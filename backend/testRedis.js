const redisClient=require('./config/redis')


{/*storing the data*/}
redisClient.set("username","ajay")
.then(()=>{
    console.log("Data stored successfully")
})
.catch((err)=>{
    console.log("Error while storing the data:",err)
})

{/*get stored data*/}

redisClient.get("username")
.then((username)=>{
    console.log("username:",username)
})
.catch((err)=>{
    console.log("Error while getting the data:",err)
})

{/*delete stored data*/}

redisClient.del("username")
.then((res)=>{
if(res===1){
    console.log("deleted successfully")
}
else{
    console.log("didn't exist")
}
})
.catch((err)=>{
    console.log("Error while deleting the data:",err)
})

{/*check stored data exists or not*/}

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
