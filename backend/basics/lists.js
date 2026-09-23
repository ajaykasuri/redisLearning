const redisClient = require("../config/redis");

{/*storing the data using lPush*/ }

const addTask = async () => {
    try {
        await redisClient.lPush("tasks",["task3","task4","task5"])
        console.log("task added succesfully");
    }
    catch (err) {
        console.log("error while adding the task:", err)
    }

}
addTask()


{/*storing the data using rPush*/ }

const addTaskRpush = async () => {
    try{
    await redisClient.rPush("tasks",["task6","task7","task8"])
    console.log("task added succesfully");
    }
     catch (err) {
        console.log("error while adding the task:", err)
    }
}
addTaskRpush()



{/* rPop*/ }

const removeTask=async()=>{
    try{
await redisClient.rPop("tasks")
console.log("tasks removed siccessfullyy..")
    }
    catch(err){
         console.log("error while removing the task:", err)
    }
}
removeTask()


{/* rPop*/ }

const removeTaskLpop=async()=>{
    try{
await redisClient.rPop("tasks")
console.log("tasks removed siccessfullyy..")
    }
    catch(err){
         console.log("error while removing the task:", err)
    }
}
removeTaskLpop()


{/* lRange*/ }

const getItem=async()=>{
    try{
const items=await redisClient.lRange("tasks",0,1)
{/*One useful special case
To get all items in the list:
lRange("tasks", 0, -1)
-1 means the last element.
So:
0, -1 → entire list */}
console.log("got item:",items)
    }
    catch(Err){
        console.log("Err while items getting:",Err)
    }
}
getItem()


{/* LLEN*/ }

const getTaskCount = async () => {
  try {
    const count = await redisClient.lLen("tasks");

    console.log("Total tasks:", count);
  } catch (err) {
    console.log("Error while getting task count:", err);
  }
};

getTaskCount();


{/* LREM*/ }


const removeSelecctedItem=async()=>{
    try{

// count = 1 → remove the first matching item from the left
// count = -1 → remove the first matching item from the right
// count = 0 → remove all matching items
        await redisClient.lRem("tasks",1,"task1")
console.log("item removed successfully")
    }
    catch(err){
        console.log("error while removing item:",err)
    }
}
removeSelecctedItem()