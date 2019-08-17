const express=require('express')
const cors=require('cors')
const mongoose=require('./config/database')
const router=require('./config/routes')
const path = require("path");
const port = process.env.PORT || 3006
app.use(express.static(path.join(__dirname,"client/build")))


const categoryRouter=require('./app/controllers/categoryControllers')

// const notesRouter=require('./app/controllers/notesController')

	




const app=express()
const port=3006

app.use(express.json())
app.use(cors())



//schema -obejct constructorn function



//list notes


app.use('/',router)
// app.use('/notes',notesRouter)

//2nd approch

app.use('/categories',categoryRouter)

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

app.listen(port,()=>{
    console.log("listing to port",port)
})