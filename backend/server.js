const express=require('express')
const cors=require('cors')
const redisClient=require('./config/redis')

const app=express()

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("server running")
})
app.listen(5000,()=>{
    console.log("Server runing")
})