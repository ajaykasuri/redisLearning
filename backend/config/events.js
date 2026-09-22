const EventEmitter=require("events")
const emmiter=new EventEmitter()

emmiter.on("login",()=>{
    console.log("User logged in")
})

emmiter.emit("login")